const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./app', function(filePath) {
  if (filePath.endsWith('page.jsx') || filePath.endsWith('page.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    // Replace Header imports
    content = content.replace(/import\s+Header\w*\s+from\s+['"]@\/components\/layout\/header\/Header\w*['"];?/g, 'import Header4 from "@/components/layout/header/Header4";');
    // Replace Footer imports
    content = content.replace(/import\s+Footer\w*\s+from\s+['"]@\/components\/layout\/footers\/Footer\w*['"];?/g, 'import FooterThree from "@/components/layout/footers/FooterThree";');
    
    // Replace JSX tags
    content = content.replace(/<Header\w*\s*\/?>(?!<\/Header)/g, '<Header4 />');
    content = content.replace(/<Footer\w*\s*\/?>(?!<\/Footer)/g, '<FooterThree />');
    
    // Remove "ViaTour" from metadata
    content = content.replace(/\|?\s*ViaTour\s*-\s*Travel\s*&\s*Tour\s*React\s*NextJS\s*Template/g, '');
    content = content.replace(/"ViaTour\s*-\s*Travel\s*&\s*Tour\s*React\s*NextJS\s*Template"/g, '"Parivar Saathi"');
    
    // Also inject generic structured data
    let schemaInjection = `
        {/* PARIVAR SAATHI SCHEMA */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Parivar Saathi",
                    url: "https://parivarsaathi.com",
                    logo: "https://parivarsaathi.com/img/logo.jpg"
                })
            }}
        />`;
    
    // basic injection before </main> or at end
    if (!content.includes('application/ld+json')) {
        content = content.replace(/<\/main>/g, schemaInjection + '\n      </main>');
    }
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});

walkDir('./app', function(filePath) {
  if (filePath.endsWith('layout.js') || filePath.endsWith('layout.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    if (!content.includes('metadataBase') && content.includes('export const metadata')) {
      content = content.replace(/export const metadata = \{/, 'export const metadata = {\n  metadataBase: new URL("https://parivarsaathi.com"),\n  alternates: {\n    canonical: "/",\n  },');
    }
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated layout ' + filePath);
    }
  }
});