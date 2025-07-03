import React from 'react';
import { BarChart3, Database, Brain, Code, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, description: "Primary language for data science and ML" },
        { name: "R", level: 85, description: "Statistical analysis and visualization" },
        { name: "SQL", level: 90, description: "Database queries and data manipulation" },
        { name: "JavaScript", level: 75, description: "Web development and data visualization" }
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 92, description: "Classical ML algorithms and pipelines" },
        { name: "TensorFlow", level: 88, description: "Deep learning and neural networks" },
        { name: "PyTorch", level: 85, description: "Research and production ML models" },
        { name: "XGBoost", level: 90, description: "Gradient boosting for structured data" }
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      skills: [
        { name: "Pandas", level: 95, description: "Data manipulation and analysis" },
        { name: "Apache Spark", level: 80, description: "Big data processing" },
        { name: "Docker", level: 85, description: "Containerization and deployment" },
        { name: "AWS", level: 78, description: "Cloud computing and ML services" }
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      skills: [
        { name: "Matplotlib", level: 90, description: "Python plotting and visualization" },
        { name: "Seaborn", level: 92, description: "Statistical data visualization" },
        { name: "Power BI", level: 88, description: "Business intelligence dashboards" },
        { name: "Tableau", level: 85, description: "Interactive data visualization" }
      ]
    }
  ];

  const tools = [
    { name: "Jupyter Notebook", category: "Development" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Apache Kafka", category: "Streaming" },
    { name: "MLflow", category: "MLOps" },
    { name: "Kubernetes", category: "Deployment" },
    { name: "JIRA", category: "Project Management" }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Active"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2023",
      status: "Active"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      status: "Active"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
      status: "Active"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and certifications 
            in data science and machine learning.
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 text-white rounded-lg">
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                        <span className="text-blue-600 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Tools & Technologies</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Additional tools and technologies I work with regularly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{tool.name}</div>
                <div className="text-sm text-gray-600">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise and commitment to continuous learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{cert.date}</div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Continuous Learning
          </h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            I believe in the importance of staying current with rapidly evolving technologies. 
            I regularly engage in online courses, attend workshops, and participate in data science 
            communities to enhance my skills and knowledge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Currently Learning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Large Language Models (LLMs)</li>
                <li>• MLOps Best Practices</li>
                <li>• Advanced Deep Learning</li>
              </ul>
            </div>
            <div className="p-6 bg-teal-50 rounded-xl">
              <h3 className="text-xl font-semibold text-teal-900 mb-3">Next Goals</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Computer Vision Specialization</li>
                <li>• Cloud Architecture Certification</li>
                <li>• Leadership in Data Science</li>
              </ul>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">Learning Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Online Courses (Coursera, Udacity)</li>
                <li>• Technical Books & Papers</li>
                <li>• Data Science Communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;