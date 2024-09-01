import React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar";
import { Button } from "/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "/components/ui/card";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md py-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="https://github.com/nutlope.png" alt="Logo" />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
            <h1 className="text-lg font-bold">Technofove IT Services</h1>
          </div>

          <div className="hidden md:flex space-x-6">
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="#hero"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  About Tech4#N
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#landscapes"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Landscapes
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Community Programs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <Button
            variant="secondary"
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            Menu
          </Button>

          {/* Mobile Menu */}
          <div
            className={`absolute top-16 right-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ${
              open ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <ul className="flex flex-col items-center space-y-4 p-4">
              <li>
                <a href="#hero" className="text-gray-600 hover:text-gray-900">
                  Technology for Everyone
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto flex flex-col items-center space-y-8">
            <div className="relative flex flex-col items-center">
              {/* Animated Avatar with Bounce and Rotate Effects */}
              <div className="w-32 h-32 mb-4 animate-bounce">
                <img
                  src="https://github.com/nutlope.png"
                  alt="Avatar"
                  className="rounded-full border-4 border-white shadow-lg transform transition-transform duration-500 hover:rotate-12"
                />
              </div>

              {/* Roadmap Visualization with Enhanced Animation */}
              <div className="roadmap-container mb-6">
                <svg
                  width="200"
                  height="100"
                  viewBox="0 0 200 100"
                  className="animate-pulse roadmap-svg"
                >
                  <line
                    x1="0"
                    y1="50"
                    x2="200"
                    y2="50"
                    stroke="#ffffff"
                    strokeWidth="4"
                  />
                  <circle cx="20" cy="50" r="6" fill="#4a90e2" />
                  <circle cx="100" cy="50" r="6" fill="#50e3c2" />
                  <circle cx="180" cy="50" r="6" fill="#ffcc00" />
                  <text
                    x="20"
                    y="30"
                    fill="#ffffff"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    Start
                  </text>
                  <text
                    x="100"
                    y="30"
                    fill="#ffffff"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    AI Capabilities
                  </text>
                  <text
                    x="180"
                    y="30"
                    fill="#ffffff"
                    fontSize="12"
                    textAnchor="middle"
                  >
                    Data Strategies
                  </text>
                </svg>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-center text-white">
              Digital Replatforming & Gen AI Enabled Data-Driven Strategies
            </h2>
            <p className="text-lg text-gray-200 text-center">
              Our team of experts will help you navigate the ever-changing
              landscape of digital technologies and AI data-driven strategies.
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
        </section>
        <section
          id="digital-replatforming"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              IT Landscapes
            </h2>
            <p className="text-lg text-gray-200 text-center mb-12">
              Our team of experts will help you navigate the ever-changing
              landscape of digital technologies and AI data-driven strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Industries We Serve */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <a
                    href="#semiconductors"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/semiconductors.svg"
                      alt="Semiconductors"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">01.</span>
                    <span>Semiconductors</span>
                  </a>
                  <a
                    href="#insurance"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/insurance.svg"
                      alt="Insurance"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">02.</span>
                    <span>Insurance</span>
                  </a>
                  <a
                    href="#manufacturing"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/manufacturing.svg"
                      alt="Manufacturing"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">03.</span>
                    <span>Manufacturing</span>
                  </a>
                  <a
                    href="#healthcare"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/healthcare.svg"
                      alt="Healthcare"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">04.</span>
                    <span>Healthcare</span>
                  </a>
                  <a
                    href="#finance"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/finance.svg"
                      alt="Finance"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">05.</span>
                    <span>Finance</span>
                  </a>
                  <a
                    href="#retail"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/retail.svg"
                      alt="Retail"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">06.</span>
                    <span>Retail</span>
                  </a>
                </div>
              </div>

              {/* Technology Landscapes */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Technology Landscapes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <a
                    href="#cloud-computing"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/cloud.svg"
                      alt="Cloud Computing"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">01.</span>
                    <span>Cloud Computing</span>
                  </a>
                  <a
                    href="#data-science"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/data-science.svg"
                      alt="Data Science"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">02.</span>
                    <span>Data Science</span>
                  </a>
                  <a
                    href="#ai-ml"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/ai.svg"
                      alt="AI & Machine Learning"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">03.</span>
                    <span>AI & Machine Learning</span>
                  </a>
                  <a
                    href="#cybersecurity"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/cybersecurity.svg"
                      alt="Cybersecurity"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">04.</span>
                    <span>Cybersecurity</span>
                  </a>
                  <a
                    href="#iot"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/iot.svg"
                      alt="IoT Solutions"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">05.</span>
                    <span>IoT Solutions</span>
                  </a>
                  <a
                    href="#blockchain"
                    className="flex items-center space-x-2 hover:text-blue-600"
                  >
                    <img
                      src="/icons/blockchain.svg"
                      alt="Blockchain Technology"
                      className="w-6 h-6"
                    />
                    <span className="text-blue-500 font-bold">06.</span>
                    <span>Blockchain Technology</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Scrollable Video Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-center text-white mb-6">
                Watch our offerings
              </h3>
              <div className="flex overflow-x-auto space-x-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 1</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 2</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 3</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 3</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 3</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="digital-replatforming"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Digital Replatforming & Gen AI Enabled Data-Driven Strategies
            </h2>
            <p className="text-lg text-gray-200 text-center mb-12">
              Our team of experts will help you navigate the ever-changing
              landscape of digital technologies and AI data-driven strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Studies */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Case Studies
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Case Study 1</h4>
                    <p className="text-gray-600">
                      Longer description of case study 1.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Case Study 2</h4>
                    <p className="text-gray-600">
                      Longer description of case study 2.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Case Study 3</h4>
                    <p className="text-gray-600">
                      Longer description of case study 3.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology Stacks */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  Technology Stacks
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/fullstack.svg"
                      alt="Full Stack"
                      className="w-8 h-8 mb-2"
                    />
                    <h4 className="font-semibold text-blue-600">Full Stack</h4>
                    <p className="text-gray-600">
                      React, Node.js, Express, MongoDB
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/mean.svg"
                      alt="MEAN Stack"
                      className="w-8 h-8 mb-2"
                    />
                    <h4 className="font-semibold text-blue-600">MEAN Stack</h4>
                    <p className="text-gray-600">
                      MongoDB, Express, Angular, Node.js
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/mern.svg"
                      alt="MERN Stack"
                      className="w-8 h-8 mb-2"
                    />
                    <h4 className="font-semibold text-blue-600">MERN Stack</h4>
                    <p className="text-gray-600">
                      MongoDB, Express, React, Node.js
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/microservices.svg"
                      alt="Microservices"
                      className="w-8 h-8 mb-2"
                    />
                    <h4 className="font-semibold text-blue-600">
                      Microservices
                    </h4>
                    <p className="text-gray-600">
                      Docker, Kubernetes, RabbitMQ, Kafka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Client Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 1."</p>
                  <p className="font-semibold">Client Name 1</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 2."</p>
                  <p className="font-semibold">Client Name 2</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 3."</p>
                  <p className="font-semibold">Client Name 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="technology-landscapes"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Technology Landscapes
            </h2>
            <p className="text-lg text-gray-200 text-center mb-12">
              Explore the essential tools, principles, and components that shape
              our technology landscapes.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Mind Map of Technology Landscapes
              </h3>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">Tools</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Google Cloud</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">Principles</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Agile Development</li>
                    <li>DevOps Practices</li>
                    <li>
                      Continuous Integration/Continuous Deployment (CI/CD)
                    </li>
                    <li>Microservices Architecture</li>
                    <li>Event-Driven Architecture</li>
                  </ul>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">
                    Infrastructure Components
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Load Balancers</li>
                    <li>API Gateways</li>
                    <li>Databases (SQL/NoSQL)</li>
                    <li>Message Brokers (RabbitMQ, Kafka)</li>
                    <li>Caching Solutions (Redis, Memcached)</li>
                  </ul>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">System Design</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Scalability</li>
                    <li>Fault Tolerance</li>
                    <li>High Availability</li>
                    <li>Security Best Practices</li>
                    <li>Monitoring and Logging</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">
                    SOLID Principles
                  </h4>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Single Responsibility Principle</li>
                    <li>Open/Closed Principle</li>
                    <li>Liskov Substitution Principle</li>
                    <li>Interface Segregation Principle</li>
                    <li>Dependency Inversion Principle</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scrollable Video Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-center text-white mb-6">
                Short Video Overview
              </h3>
              <div className="flex overflow-x-auto space-x-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 1</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 2</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-64 flex-shrink-0">
                  <h4 className="text-lg font-semibold mb-2">Video 3</h4>
                  <div className="h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[Video Placeholder]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="digital-replatforming"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Digital Replatforming & Gen AI Enabled Data-Driven Strategies
            </h2>
            <p className="text-lg text-gray-200 text-center mb-12">
              Our team of experts will help you navigate the ever-changing
              landscape of digital technologies and AI data-driven strategies.
            </p>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Visual Mind Map of Digital Replatforming & Gen AI
              </h3>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">
                    Digital Replatforming
                  </h4>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/replatforming.svg"
                      alt="Replatforming"
                      className="w-8 h-8 mb-2"
                    />
                    <p className="text-gray-600">
                      Migrate legacy systems to modern platforms for enhanced
                      efficiency and scalability.
                    </p>
                  </div>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">Gen AI</h4>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/ai.svg"
                      alt="AI"
                      className="w-8 h-8 mb-2"
                    />
                    <p className="text-gray-600">
                      Leverage cutting-edge AI technologies to drive innovation
                      and automate processes.
                    </p>
                  </div>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h4 className="font-semibold text-lg mb-2">
                    Data-Driven Strategies
                  </h4>
                  <div className="bg-blue-50 rounded-lg p-4 transition-transform transform hover:scale-105">
                    <img
                      src="/icons/data-science.svg"
                      alt="Data Science"
                      className="w-8 h-8 mb-2"
                    />
                    <p className="text-gray-600">
                      Utilize advanced analytics and data science to make
                      informed business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Case Studies
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Case Study 1</h4>
                  <p className="text-gray-600">
                    Longer description of case study 1.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Case Study 2</h4>
                  <p className="text-gray-600">
                    Longer description of case study 2.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Case Study 3</h4>
                  <p className="text-gray-600">
                    Longer description of case study 3.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">
                Client Testimonials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 1."</p>
                  <p className="font-semibold">Client Name 1</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 2."</p>
                  <p className="font-semibold">Client Name 2</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">"Client testimonial 3."</p>
                  <p className="font-semibold">Client Name 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="customer-stories"
          className="bg-gradient-to-r from-blue-500 to-purple-500 py-12"
        >
          <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Customer Stories
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Discover how our clients have transformed their businesses through
              our services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl mb-2">
                  Case Study 1: Digital Transformation in Manufacturing
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> The client faced inefficiencies in
                  their production line due to outdated systems.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Solution:</strong> We implemented a modern ERP system
                  that streamlined operations and improved data visibility.
                </p>
                <p className="text-gray-600">
                  <strong>Trade-offs:</strong> The transition required a
                  temporary slowdown in production but resulted in long-term
                  efficiency gains.
                </p>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl mb-2">
                  Case Study 2: AI Integration in Insurance
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> The client struggled with manual
                  claims processing, leading to customer dissatisfaction.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Solution:</strong> We introduced AI-driven automation
                  to expedite claims processing and enhance customer service.
                </p>
                <p className="text-gray-600">
                  <strong>Trade-offs:</strong> Initial costs were high, but the
                  reduction in processing time significantly improved customer
                  retention.
                </p>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl mb-2">
                  Case Study 3: Leveraging Data Analytics in Retail
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Challenge:</strong> The client lacked insights into
                  customer behavior, affecting sales strategies.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Solution:</strong> We deployed advanced analytics
                  tools to gather and analyze customer data for targeted
                  marketing.
                </p>
                <p className="text-gray-600">
                  <strong>Trade-offs:</strong> While the implementation required
                  significant data collection efforts, it led to a 30% increase
                  in sales.
                </p>
              </div>
            </div>
            {/* Client Testimonials */}
            <h3 className="text-2xl font-bold text-center mb-6">
              What Our Clients Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <p className="text-gray-600 mb-4">
                  "The transformation was seamless, and our efficiency has never
                  been better!"
                </p>
                <p className="font-semibold">
                  Client Name 1, CEO of Manufacturing Co.
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <p className="text-gray-600 mb-4">
                  "Their AI solutions have revolutionized our claims process!"
                </p>
                <p className="font-semibold">
                  Client Name 2, Head of Claims at Insurance Inc.
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <p className="text-gray-600 mb-4">
                  "Data analytics helped us understand our customers better than
                  ever!"
                </p>
                <p className="font-semibold">
                  Client Name 3, Marketing Director at Retail Corp.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-blue-500 to-purple-500 py-12">
        <div className="container mx-auto text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Sitemap */}
            <div>
              <h3 className="text-lg font-bold mb-4">Sitemap</h3>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:underline">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="hover:underline">
                    Expertise
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p>
                Email:{" "}
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
              <p>Address: 123 Business Rd, City, Country</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-white pt-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Technofove IT. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
