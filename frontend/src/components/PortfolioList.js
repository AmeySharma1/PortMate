import React from 'react';

function PortfolioList({ portfolios }) {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="glass-card p-12 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-secondary-800 bg-clip-text text-transparent">
            Professional Portfolio Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning, customizable portfolios that showcase your skills, projects, and professional journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Create Your First Portfolio
            </button>
            <button className="bg-white/80 hover:bg-white/90 text-primary-600 font-bold py-3 px-8 rounded-xl border border-primary-200 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse Templates
            </button>
          </div>
        </div>
      </div>
      
      {/* Portfolio Grid */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Your Portfolios</h2>
          <span className="text-gray-500">{portfolios.length} {portfolios.length === 1 ? 'portfolio' : 'portfolios'}</span>
        </div>
        
        {portfolios.length === 0 ? (
          <div className="glass-card p-12 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20 max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No portfolios yet</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Get started by creating your first portfolio. Choose from our beautiful templates or build your own.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Create Your First Portfolio
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map(portfolio => (
              <div key={portfolio.id} className="glass-card p-6 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{portfolio.title || 'Untitled Portfolio'}</h3>
                    <p className="text-gray-600 text-sm mt-1">{portfolio.description || 'No description'}</p>
                  </div>
                  <span className="bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 text-xs font-medium px-3 py-1 rounded-full">
                    {portfolio.template}
                  </span>
                </div>
                
                <div className="flex space-x-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {portfolio.sections_count || 0} sections
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a7 7 0 010 14H5a7 7 0 010-14m14 0V9a2 2 0 00-.17-.74L14.16 4.32a2 2 0 00-.54-.86L11 2H5a2 2 0 000 4v14a2 2 0 00.17.74l2.57 2.57a2 2 0 00.86.54l4.66 1.38a2 2 0 002.21-1.22l.17-.74V11z" />
                    </svg>
                    {portfolio.projects_count || 0} projects
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                    View
                  </button>
                  <button className="flex-1 bg-white/80 hover:bg-white/90 text-primary-600 font-medium py-2 px-4 rounded-lg border border-primary-200 backdrop-blur-sm transition-all duration-300">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Features Section */}
      <div className="glass-card p-12 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/30">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Powerful Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 00-1 1v7a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1H4zm1 10v-2h14v2a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Templates</h3>
            <p className="text-gray-600">Choose from 15+ professionally designed templates or create your own with our intuitive builder.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2m0-6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0-4v2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sections Management</h3>
            <p className="text-gray-600">Add, edit, and reorder sections for personal info, skills, projects, contact information, and more.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-.895 3-2s-1.343-2-3-2m0 0a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Project Showcase</h3>
            <p className="text-gray-600">Display your work samples with images, GitHub links, live demos, and detailed descriptions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;