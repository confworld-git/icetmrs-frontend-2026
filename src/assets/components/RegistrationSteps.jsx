import React from 'react';

export default function RegistrationSteps() {
  return (
    <div className="  py-4 px-4 relative overflow-hidden">
      
      <div className="W-full relative ">
        
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight text-center pb-4">
                    Registration Steps
                  </h1>

        {/* Steps Grid - Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-8">
          {/* Step 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-indigo-200 group-hover:border-indigo-400 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-2xl font-black text-white">1</span>
              </div>

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                  alt="Choose category"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  Select Category
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose your registration type and participation level
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-amber-200 group-hover:border-amber-400 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-2xl font-black text-white">2</span>
              </div>

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                  alt="Fill form"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  Complete Form
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fill in your personal and professional details
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-indigo-200 group-hover:border-indigo-400 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-2xl font-black text-white">3</span>
              </div>

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" 
                  alt="Payment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  Secure Payment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete registration with our encrypted gateway
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative">
            <div className="absolute inset-0  rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative  rounded-3xl overflow-hidden border-2 border-amber-300 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
              {/* Check Badge */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl z-10">
                <svg className="w-12 h-12 text-indigo-600 bg-amber-400 rounded-xl p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" 
                  alt="Confirmation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                  You're In!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive confirmation and conference access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl blur-xl opacity-15"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-indigo-200 shadow-xl">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-xl font-black text-white">1</span>
              </div>
              
              <div className="flex">
                <div className="w-32 h-32 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" 
                    alt="Choose category"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Select Category
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose your registration type
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center py-4">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-amber-400"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl blur-xl opacity-15"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-amber-200 shadow-xl">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-xl font-black text-white">2</span>
              </div>
              
              <div className="flex">
                <div className="w-32 h-32 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" 
                    alt="Fill form"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Complete Form
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill in your details
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center py-4">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-purple-500"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-15"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-indigo-200 shadow-xl">
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-2xl z-10">
                <span className="text-xl font-black text-white">3</span>
              </div>
              
              <div className="flex">
                <div className="w-32 h-32 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80" 
                    alt="Payment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Secure Payment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete registration
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center py-4">
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-green-500"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative group">
            <div className="absolute inset-0  rounded-3xl blur-xl opacity-15"></div>
            <div className="relative  rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl">
              <div className="absolute top-4 left-4 w-12 h-12  rounded-xl flex items-center justify-center shadow-2xl z-10">
                <svg className="w-12 h-12 text-indigo-600 bg-amber-400 p-2 rounded-xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div className="flex">
                <div className="w-32 h-32 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80" 
                    alt="Confirmation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-indigo-600 mb-2">
                    You're In!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Receive confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}