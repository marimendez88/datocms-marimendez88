import Container from './container'
import React  from 'react';


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row justify-center items-center">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
          Want to know more about my work?
          </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center pb-10">
            <a
              href="https://medium.com/@marimendez88" 
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Medium
            </a>
            <a
              href="https://marimendez88.hashnode.dev/"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Hashnode
            </a>
            <a
              href="https://twitter.com/marimendez88"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Twitter
            </a>
            <a
              href="https://github.com/marimendez88"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/marimendez88/"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
            <a
              href="http://mtekh.com/"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Website
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center pb-2">
            <h3 className="text-l font-bold text-center">2021 - Made with love by Maria Jose Mendez</h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center pb-10">
            <h5 className="text-center">This blog is built with DatoCMS, Gatsby and deployed by Vercel</h5>
          </div>
      </Container>
    </footer>
  )
}
