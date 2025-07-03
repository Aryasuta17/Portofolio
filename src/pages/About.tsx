import React from 'react';
import { Award, BookOpen, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate Data Scientist with over 3 years of experience in transforming 
                complex data into actionable business insights. My journey began with a fascination 
                for mathematics and evolved into a career dedicated to solving real-world problems 
                through data-driven solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-700">15+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Working with data"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide my approach to data science and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Precision",
                description: "Delivering accurate, reliable insights through rigorous analysis and validation."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Learning",
                description: "Continuously expanding knowledge to stay at the forefront of data science."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description: "Working closely with teams to translate data insights into business value."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence",
                description: "Striving for the highest quality in every project and deliverable."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-600">
              From curious student to experienced data professional.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                year: "2021",
                title: "Started Data Science Journey",
                description: "Began exploring the world of data science through online courses and personal projects, developing a strong foundation in Python and statistics."
              },
              {
                year: "2022", 
                title: "First Professional Role",
                description: "Joined as a Data Analyst, working on customer segmentation and business intelligence projects, gaining hands-on experience with real-world datasets."
              },
              {
                year: "2023",
                title: "Advanced to Data Scientist",
                description: "Promoted to Data Scientist role, leading machine learning initiatives and developing predictive models for business optimization."
              },
              {
                year: "2024",
                title: "Continuous Growth",
                description: "Expanding expertise in deep learning and MLOps, contributing to open-source projects and mentoring junior team members."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Beyond Data Science
            </h2>
            <p className="text-xl text-gray-600">
              When I'm not analyzing data, you'll find me pursuing these interests.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Innovation",
                description: "Staying updated with the latest in AI/ML research and emerging technologies that shape our future.",
                image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Knowledge Sharing",
                description: "Writing technical blogs and participating in data science communities to share insights and learn from others.",
                image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Problem Solving",
                description: "Enjoying challenging puzzles and algorithmic problems that keep my analytical thinking sharp.",
                image: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((interest, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;