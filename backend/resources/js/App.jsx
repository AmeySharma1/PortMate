import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/portfolios');
        setPortfolios(response.data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
        // Set empty array if API is not available yet
        setPortfolios([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPortfolios();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio builder...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio Builder</h1>
          <p className="text-xl opacity-90">Build and customize your developer portfolio</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Portfolios</h2>
              <p className="text-gray-600">Create customizable portfolios with sections for personal information, skills, and work samples.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                Create New Portfolio
              </button>
            </div>
          </div>
          
          {portfolios.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No portfolios yet</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first portfolio</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                Create Your First Portfolio
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolios.map(portfolio => (
                <div key={portfolio.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{portfolio.title || 'Untitled Portfolio'}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{portfolio.template}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{portfolio.description || 'No description available.'}</p>
                  <div className="flex space-x-2">
                    <button className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-1 px-3 rounded-lg transition duration-200">
                      View
                    </button>
                    <button className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded-lg transition duration-200">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 00-1 1v7a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4zm1 10v-2h14v2a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Customizable Templates</h3>
            </div>
            <p className="text-gray-600">Choose from multiple templates or create your own with drag-and-drop customization.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m6-4v2m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Sections Management</h3>
            </div>
            <p className="text-gray-600">Add, edit, and reorder sections for personal info, skills, projects, and contact information.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-.895 3-2s-1.343-2-3-2m0 0a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Project Showcase</h3>
            </div>
            <p className="text-gray-600">Display your work samples with images, GitHub links, live demos, and detailed descriptions.</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Portfolio Builder Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);