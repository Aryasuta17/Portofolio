import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: "Senior Data Scientist",
      company: "Tech Solutions Indonesia",
      location: "Jakarta, Indonesia",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading data science initiatives for customer analytics and business intelligence. Developing machine learning models for customer segmentation and churn prediction.",
      achievements: [
        "Improved customer retention by 23% through predictive modeling",
        "Led a team of 3 junior data scientists",
        "Developed automated ML pipeline reducing model deployment time by 60%",
        "Implemented A/B testing framework for product optimization"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "MLflow"]
    },
    {
      title: "Data Scientist",
      company: "Digital Analytics Corp",
      location: "Jakarta, Indonesia", 
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed predictive models and analytics solutions for e-commerce and retail clients. Focused on recommendation systems and sales forecasting.",
      achievements: [
        "Built recommendation system increasing sales by 18%",
        "Created real-time dashboard for inventory management",
        "Optimized marketing campaigns through customer segmentation",
        "Reduced forecasting error by 35% using ensemble methods"
      ],
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "Power BI", "Apache Spark"]
    },
    {
      title: "Data Analyst",
      company: "Business Intelligence Partners",
      location: "Jakarta, Indonesia",
      period: "2021 - 2022", 
      type: "Full-time",
      description: "Performed data analysis and reporting for various business units. Created dashboards and automated reporting systems for executive decision-making.",
      achievements: [
        "Automated 15+ manual reporting processes",
        "Designed executive dashboard reducing report generation time by 80%",
        "Conducted market research analysis for new product launches",
        "Trained 20+ business users on self-service analytics tools"
      ],
      technologies: ["SQL", "Excel", "Tableau", "Python", "Power BI"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Statistics",
      institution: "University of Indonesia",
      location: "Jakarta, Indonesia",
      period: "2017 - 2021",
      gpa: "3.8/4.0",
      description: "Specialized in statistical modeling, data analysis, and mathematical foundations for data science.",
      highlights: [
        "Graduated Summa Cum Laude",
        "Thesis: 'Predictive Modeling for Agricultural Yield Optimization'",
        "President of Statistics Student Association",
        "Dean's List for 6 consecutive semesters"
      ]
    },
    {
      degree: "Data Science Bootcamp",
      institution: "Rakamin Academy",
      location: "Online",
      period: "2021",
      description: "Intensive 6-month program focusing on practical data science skills and industry projects.",
      highlights: [
        "Completed 5 real-world industry projects",
        "Final project: Credit Risk Assessment Model",
        "Mentored by senior industry professionals",
        "Top 10% graduate ranking"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-2024-001"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023", 
      credentialId: "GDA-2023-456"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900-2023-789"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "2022",
      credentialId: "DLS-2022-123"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in data science, from education to current role, 
            showcasing growth and achievements along the way.
          </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="text-lg text-blue-600 font-medium mb-2">{job.company}</div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    <div className="text-lg text-green-600 font-medium mb-2">{edu.institution}</div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      {edu.gpa && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Award className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Professional Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <div className="text-orange-600 font-medium mb-2">{cert.issuer}</div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{cert.date}</span>
                  <span className="text-sm text-gray-500">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Career Timeline</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {[
              { year: "2017", event: "Started Bachelor's in Statistics", type: "education" },
              { year: "2021", event: "Graduated & Completed Data Science Bootcamp", type: "education" },
              { year: "2021", event: "First Role as Data Analyst", type: "work" },
              { year: "2022", event: "Promoted to Data Scientist", type: "work" },
              { year: "2023", event: "Advanced to Senior Data Scientist", type: "work" },
              { year: "2024", event: "Leading Data Science Team", type: "work" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`p-4 rounded-lg ${item.type === 'education' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <div className="font-bold text-lg text-gray-900">{item.year}</div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;