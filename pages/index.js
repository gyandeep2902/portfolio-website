import Link from 'next/link';
import { getSortedPostsData } from '../lib/articles';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData: allPostsData ?? []
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-2xl font-extrabold text-blue-500 tracking-tight">
            Gyan Deep
          </h1>
          <ul className="flex space-x-6 text-sm sm:text-base font-medium">
            <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#blog" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-gradient-to-br from-gray-950 to-gray-800 overflow-hidden">
        {/* Abstract background shapes - purely for visual appeal */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-1/4 left-1/4"></div>
          <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-2/3 right-1/4"></div>
          <div className="absolute w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
            Hey, I&apos;m Gyan 👋
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              View Projects
            </a>
            <a href="#blog" className="border border-blue-500 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-900 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              Read My Blog
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            I&apos;m a passionate developer interested in building scalable, meaningful technology.
            With a background in C++, Java and Python, I&apos;m now focused on creating modern
            web apps and upskilling toward backend, AI, and Cloud engineering.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            This site is my journey 🚀 through the exciting world of development, where I share my projects, insights, and continuous learning experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900 text-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: 'Breast Cancer Predictor',
                desc: 'An intuitive machine learning application built with Streamlit and Logistic Regression for early detection.',
                link: '#', // Replace with actual project link
              },
              {
                title: 'Hospital Management System',
                desc: 'A robust C++ Qt application featuring a reliable SQLite backend for efficient hospital operations.',
                link: '#', // Replace with actual project link
              },
              {
                title: 'My Blog Platform',
                desc: 'This very platform! Developed using Next.js, styled with Tailwind CSS, and powered by Markdown content.',
                link: '#', // Replace with actual project link
              },
              // {
              //   title: 'E-commerce API',
              //   desc: 'Building a scalable backend API for an e-commerce platform using Node.js and Express.',
              //   link: '#', // Example of adding more projects
              // },
              // {
              //   title: 'Real-time Chat App',
              //   desc: 'A web-based real-time chat application using WebSockets for instant messaging.',
              //   link: '#',
              // },
              // {
              //   title: 'Portfolio Website V1',
              //   desc: 'The initial iteration of my personal portfolio, showcasing fundamental web development skills.',
              //   link: '#',
              // },
            ].map((proj, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left border border-gray-700">
                <h3 className="text-2xl font-semibold mb-3 text-white">{proj.title}</h3>
                <p className="text-gray-400 text-base mb-4 leading-relaxed">{proj.desc}</p>
                <a href={proj.link} className="inline-flex items-center text-blue-500 text-base font-medium hover:text-blue-400 transition-colors duration-300">
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-gray-800 text-center">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">Latest Blog Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {allPostsData.length > 0 ? (
              allPostsData.map(({ id, title, date, excerpt }) => (
                <Link key={id} href={`/articles/${id}`} passHref>
                  <div className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left cursor-pointer border border-gray-700">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
                    <p className="text-gray-500 text-sm mb-3 font-mono">{date}</p> {/* Monospaced for date */}
                    <p className="text-gray-400 text-base mb-4 leading-relaxed">{excerpt}</p>
                    <span className="inline-flex items-center text-blue-500 text-base font-medium hover:text-blue-400 transition-colors duration-300">
                      Read More
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400 text-lg">No blog posts yet. Check back soon!</p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Have a project idea, an exciting opportunity, or just want to say hi? Feel free to reach out!
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <a href="mailto:youremail@example.com" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/gyan-deep-gd2902/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-blue-500 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-900 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.3 3H3.7A.7.7 0 003 3.7v12.6A.7.7 0 003.7 17h12.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7zM6.5 13.9h-2V7.4h2v6.5zM5.5 6.4a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4zM13.8 13.9h-1.8V11a2.2 2.2 0 00-2.2-2.2c-1.2 0-2.2 1-2.2 2.2v2.9h-1.8V7.4h1.8v.8c.4-.6 1.1-1.3 2.1-1.3 2.5 0 2.9 1.7 2.9 3.9v2.9z" clipRule="evenodd"></path></svg>
              LinkedIn
            </a>
            <a href="https://github.com/gyandeep2902" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-blue-500 text-blue-400 px-6 py-3 rounded-full hover:bg-blue-900 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.866 8.163 6.839 9.48.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.107-1.464-1.107-1.464-.905-.619.069-.608.069-.608 1.002.071 1.531 1.03 1.531 1.03.89 1.529 2.336 1.088 2.904.832.09-.645.35-1.088.636-1.338-2.22-.253-4.555-1.119-4.555-4.953 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27-.098-2.65 0 0 .84-.268 2.75 1.025A9.284 9.284 0 0110 4.09c.85.006 1.7.092 2.5.275 1.909-1.293 2.747-1.025 2.747-1.025.35 1.38-.004 2.397-.098 2.65.64.699 1.03 1.592 1.03 2.683 0 3.843-2.335 4.695-4.566 4.945.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48A10 10 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm bg-gray-950 border-t border-gray-700">
        <div className="container mx-auto px-6">
          &copy; {new Date().getFullYear()} Gyan Deep.
        </div>
      </footer>
    </div>
  );
}