import React from 'react';

export default function ConferenceCards() {
  return (
    <div className="min-h-screen bg-white py-4 px-4">
      <div className="w-full">
        {/* Header with geometric shapes */}
        

        <div className="space-y-8">
          {/* Card 1 - Diagonal Split Design */}
          <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 overflow-hidden group">
            
            <div className="relative z-10 p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  
                  <h2 className="text-4xl font-black text-white mb-2">
                    GROUP DISCOUNT
                  </h2>
                </div>
                
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-white">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-400">QUALIFY WITH:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start bg-white/10 p-4 hover:bg-white/20 transition-colors">
                      <div className="w-8 h-8 bg-amber-400 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <p className="font-medium">
                        Group of 5 members or more
                      </p>
                    </div>
                    <div className="flex gap-4 items-start bg-white/10 p-4 hover:bg-white/20 transition-colors">
                      <div className="w-8 h-8 bg-amber-400 flex-shrink-0 flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <p className="font-medium">
                        Co-author of a paper presentation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-400 text-indigo-950 p-6 -mx-10 -mb-10 md:mx-0 md:mb-0">
                  <div className="text-5xl font-black mb-3">10+</div>
                  <h3 className="text-xl font-bold mb-3">LARGE GROUP BONUS</h3>
                  <p className="font-medium leading-relaxed mb-4">
                    Groups with more than 10 members receive higher discount percentages. 
                  </p>
                  
                  <a href="/contact-us">
                  <p className="text-sm font-bold uppercase tracking-wider">
                    → Contact Academic Partnership Team
                  </p></a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Layered Block Design */}
          <div className="relative">
            {/* Background layers */}
            <div className="absolute top-4 left-4 right-0 bottom-0 bg-amber-400"></div>
            <div className="absolute top-2 left-2 right-0 bottom-0 bg-indigo-200"></div>
            
            {/* Main content */}
            <div className="relative bg-white border-4 border-indigo-950 p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  
                  <h2 className="text-4xl font-black text-indigo-950 mb-2">
                    MULTIPLE PAPER PRESENTATIONS
                  </h2>
                </div>
                
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start  pl-6 py-2 hover:border-amber-400 hover:bg-amber-50 transition-all">
                  <div className="w-10 h-10 bg-indigo-800 flex-shrink-0 flex items-center justify-center text-amber-400 font-black text-lg">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">MAXIMUM PAPERS</p>
                    <p className="text-gray-700">
                      Authors may submit and present up to 3 papers maximum
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start  pl-6 py-2 hover:border-amber-400 hover:bg-amber-50 transition-all">
                  <div className="w-10 h-10 bg-indigo-800 flex-shrink-0 flex items-center justify-center text-amber-400 font-black text-lg">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">FIRST PAPER</p>
                    <p className="text-gray-700">
                      Full payment required for the first paper presentation
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start  pl-6 py-2 hover:border-amber-400 hover:bg-amber-50 transition-all">
                  <div className="w-10 h-10 bg-indigo-800 flex-shrink-0 flex items-center justify-center text-amber-400 font-black text-lg">
                    $
                  </div>
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">ADDITIONAL FEE</p>
                    <p className="text-gray-700">
                      Each additional oral/poster presentation: <span className="font-black text-indigo-600">$150 USD</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start pl-6 py-2 hover:border-amber-400 hover:bg-amber-50 transition-all">
                  <div className="w-10 h-10 bg-indigo-800 flex-shrink-0 flex items-center justify-center text-amber-400 font-black text-lg">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">SCOPUS PUBLICATION</p>
                    <p className="text-gray-700">
                      Publication fees required for each Scopus paper
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start  pl-6 py-2 hover:border-amber-400 hover:bg-amber-50 transition-all">
                  <div className="w-10 h-10 bg-indigo-800 flex-shrink-0 flex items-center justify-center text-amber-400 font-black text-lg">
                    +
                  </div>
                  <div>
                    <p className="font-bold text-indigo-950 mb-1">BEYOND LIMIT</p>
                    <p className="text-gray-700">
                      More than 3 papers can be presented by co-authors on full registration
                    </p>
                  </div>
                </div>
              </div>

              {/* Deadline section */}
              <div className="bg-indigo-800 text-white p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="relative flex items-center gap-6">
                  <div className="w-16 h-16 bg-amber-400 flex-shrink-0 flex items-center justify-center">
                    <span className="text-3xl font-black text-indigo-950">!</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-amber-400 mb-2">
                      IMPORTANT DEADLINE
                    </h3>
                    <p className="font-medium">
                      Confirm paper count with Conference Coordinator{' '}
                      <span className="text-amber-400 font-black">3 WEEKS BEFORE</span>{' '}
                      final payment deadline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}