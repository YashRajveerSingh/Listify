import React from 'react'
import about from "../../assets/about.png"

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 -ml-2">                
                      <img
                          src={about}
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                                 CRM (Customer Relationship Management)
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Our CRM (Customer Relationship Management) platform is designed to empower businesses by
                       streamlining customer interactions, enhancing team collaboration, and driving growth. With
                        intuitive tools for managing customer data, tracking sales pipelines, and automating routine
                         tasks, our CRM helps businesses focus on building meaningful relationships with their clients.
                        Whether you're a small business or a large enterprise, our solution is tailored to meet your unique needs,
                         offering powerful analytics, seamless integrations, and a user-friendly interface.
                      </p>
                      <p className="mt-4 text-gray-600">
                      At the core of our mission is enabling businesses to thrive by putting customers first, fostering long-term
                       loyalty, and maximizing efficiency across every department.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}