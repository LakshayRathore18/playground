import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Input from '../components/ui/input';
import NavBar from '../components/NavBar';
import AskDoubtModal from '../components/AskDoubtModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, MessageSquare, ThumbsUp, MessageCircle, Filter, Plus } from 'lucide-react';

function DoubtForum() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen flex bg-green-50 flex-col">
      <NavBar /> {/* Navigation Bar */}

      {/* Page Content */}
      <main className="flex-1 ">
        {/* Hero Section */}
        <section className="bg-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-6">Doubts Forum</h1>
              <p className="text-lg text-gray-600 mb-8">
                A dedicated space for each department where you can ask questions, get help from your co-heads, heads,
                and teammates, and grow together.
              </p>
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search questions, topics, or keywords..."
                  className="pl-12 pr-4 py-3 rounded-full shadow-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Forum Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <h2 className="text-2xl font-bold">Discussion Forums</h2>
              <Button onClick={openModal} className="px-4 cursor-pointer py-2 shadow-sm">
                <Plus className="mr-2 h-4 w-4" /> Ask a Question
              </Button>
            </div>


            <Tabs defaultValue="all" className="mb-10">
              <div className="overflow-x-auto pb-2">
                <TabsList className="inline-flex p-1 bg-gray-100 rounded-lg">
                  <TabsTrigger value="all" className="px-5     cursor-pointer py-2 rounded-md">All Departments</TabsTrigger>
                  <TabsTrigger value="web" className="px-5     cursor-pointer py-2 rounded-md">Web Development</TabsTrigger>
                  <TabsTrigger value="android" className="px-5 cursor-pointer py-2 rounded-md">Android</TabsTrigger>
                  <TabsTrigger value="cloud" className="px-5   cursor-pointer py-2 rounded-md">Cloud</TabsTrigger>
                  <TabsTrigger value="ml" className="px-5      cursor-pointer py-2 rounded-md">Machine Learning</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar */}
                  <div className="w-full lg:w-80 space-y-6">
                    <div className="border rounded-xl p-5 shadow-sm">
                      <h3 className="font-medium text-lg mb-4">Filter By</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input type="radio" name="filter" id="recent" className="mr-3 h-4 w-4" defaultChecked />
                          <label htmlFor="recent" className="text-sm">
                            Most Recent
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" name="filter" id="popular" className="mr-3 h-4 w-4" />
                          <label htmlFor="popular" className="text-sm">
                            Most Popular
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" name="filter" id="unanswered" className="mr-3 h-4 w-4" />
                          <label htmlFor="unanswered" className="text-sm">
                            Unanswered
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" name="filter" id="solved" className="mr-3 h-4 w-4" />
                          <label htmlFor="solved" className="text-sm">
                            Solved
                          </label>
                        </div>
                      </div>
                    </div>

                   

                    <Button variant="outline" className="w-full cursor-pointer py-2.5 flex items-center justify-center shadow-sm">
                      <Filter className="mr-2 h-4 w-4" /> Apply Filters
                    </Button>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="space-y-6">
                      {/* Question 1 */}
                      <div className="border rounded-xl p-5 hover:shadow-md transition-shadow bg-white">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center">
                            <Button variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0 hover:bg-gray-100">
                              <ThumbsUp className="h-5 w-5 text-gray-600" />
                            </Button>
                            <span className="text-sm font-medium mt-1">24</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">Solved</span>
                              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">React</span>
                            </div>
                            <Link to="#" className="font-bold text-lg hover:text-blue-600 transition-colors block mb-2">
                              How to implement authentication in a React application using Firebase?
                            </Link>
                            <p className="text-gray-600 text-sm mb-4">
                              I'm building a React application and need to implement user authentication. I've set up
                              Firebase but I'm not sure how to properly integrate it with React...
                            </p>
                            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t">
                              <div className="flex items-center">
                                <img
                                  src="/placeholder.svg?height=32&width=32"
                                  alt="User"
                                  width={36}
                                  height={36}
                                  className="rounded-full mr-3"
                                />
                                <div>
                                  <div className="text-sm font-medium">Rahul Sharma</div>
                                  <div className="text-xs text-gray-500">Posted 2 days ago</div>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-500">
                                <MessageCircle className="h-4 w-4 mr-1.5" />
                                <span className="text-sm">8 replies</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional questions... */}
                      {/* You can duplicate the question card for more content */}

                    </div>

                    <div className="mt-10 flex justify-center">
                      <Button variant="outline" className="px-6 cursor-pointer py-2.5 shadow-sm">
                        Load More Questions
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Other tab contents similar to above */}
            </Tabs>
            <AskDoubtModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default DoubtForum;
