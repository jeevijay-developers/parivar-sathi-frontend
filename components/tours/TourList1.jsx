'use client';
import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { axiosInstance } from "@/app/lib/axiousInstance";
import Image from "next/image";

export default function TourList1() {
  const [opdCamps, setOpdCamps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const fetchOpdCamps = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/opds/opdcamps/previous-all");
        setOpdCamps(response.data);
      } catch (error) {
        console.error("Error fetching OPD camps:", error);
        setError("Failed to load OPD camps. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOpdCamps();
  }, []);

  const totalPages = Math.ceil(opdCamps.length / ITEMS_PER_PAGE);
  const paginatedData = opdCamps.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return <div className="text-center py-60">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-60 text-red-500">
        {error}
        <button onClick={() => window.location.reload()} className="mt-4 button -accent-1">
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 tour-box">
            <div className="row y-gap-30 pt-30">
              {paginatedData.map((camp) => (
                <div className="col-md-6 col-12" key={camp._id}>
                  {/* Camp card content here */}
                  <div className="tourCard -type-2">
                    <div className="tourCard__image">
                      <Image
                        width={420}
                        height={390}
                        src={camp.image || "/images/placeholder-camp.jpg"}
                        alt={camp.title || "OPD Camp"}
                      />

                      {camp.date && (
                        <div className="tourCard__badge">
                          <div className="bg-accent-2 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            <div>
                              <div className="d-flex items-center text-14">
                                <i className="icon-calendar mr-10"></i>
                                {new Date(camp.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {camp.status && (
                        <div className="tourCard__badge" style={{ top: '60px' }}>
                          <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
                            {camp.status.toUpperCase()}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="tourCard__content">
                      <div className="tourCard__location">
                        <i className="icon-pin"></i>
                        {camp.location || "Location TBD"}
                      </div>
                      <h3 className="tourCard__title mt-5">
                        <span>{camp.title || "OPD Medical Camp"}</span>
                      </h3>
                      <p className="tourCard__text mt-5">
                        {camp.description || "Free medical consultation and health checkup services for the community."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {opdCamps.length > ITEMS_PER_PAGE && (
              <div className="d-flex justify-center flex-column mt-60">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setPage={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

  );
}
