import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction Model",
      description: "Built a machine learning model to predict customer churn with 87% accuracy using ensemble methods. Implemented feature engineering and hyperparameter tuning to optimize performance.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "machine-learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      github: "https://github.com/username/churn-prediction",
      demo: "#",
      date: "2024"
    },
    {
      id: 2,
      title: "Sales Analytics Dashboard",
      description: "Created an interactive Power BI dashboard for sales performance analysis, enabling stakeholders to track KPIs and identify growth opportunities in real-time.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "analytics",
      technologies: ["Power BI", "SQL", "Excel", "DAX"],
      github: "https://github.com/username/sales-dashboard",
      demo: "#",
      date: "2024"
    },
    {
      id: 3,
      title: "Sentiment Analysis API",
      description: "Developed a REST API for real-time sentiment analysis of social media posts using BERT transformer model, deployed on AWS with 99.9% uptime.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "nlp",
      technologies: ["Python", "BERT", "FastAPI", "AWS", "Docker"],
      github: "https://github.com/username/sentiment-api",
      demo: "#",
      date: "2023"
    },
    {
      id: 4,
      title: "Stock Price Prediction",
      description: "Implemented LSTM neural networks to predict stock prices with technical indicators. Achieved 15% improvement over baseline models through feature engineering.",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "deep-learning",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
      github: "https://github.com/username/stock-prediction",
      demo: "#",
      date: "2023"
    },
    {
      id: 5,
      title: "E-commerce Recommendation System",
      description: "Built a collaborative filtering recommendation system that increased user engagement by 25% and improved cross-selling effectiveness.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "machine-learning",
      technologies: ["Python", "Surprise", "Pandas", "Flask"],
      github: "https://github.com/username/recommendation-system",
      demo: "#",
      date: "2023"
    },
    {
      id: 6,
      title: "Market Basket Analysis",
      description: "Performed association rule mining to identify product relationships and optimize store layouts, resulting in 12% increase in average transaction value.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "analytics",
      technologies: ["R", "Apriori", "ggplot2", "Shiny"],
      github: "https://github.com/username/market-basket",
      demo: "#",
      date: "2022"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'nlp', label: 'NLP' },
    { value: 'deep-learning', label: 'Deep Learning' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore my portfolio of data science projects, from machine learning models 
            to analytics dashboards. Each project represents a unique challenge and solution.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <Github className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Explore More on GitHub
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Visit my GitHub profile to see additional projects, contributions to open-source, 
              and detailed code implementations.
            </p>
            <a
              href="https://github.com/arknsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="h-5 w-5 mr-2" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;