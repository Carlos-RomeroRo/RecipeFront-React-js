import ContactButton from '../functions/contactButton'
function Footer() {
  return (
        <footer className="bg-red-500 shadow-sm w-full">
            <div className="h-auto w-full p-4 gap-6 flex items-center justify-between">
                    {/* Texto lado izquierdo */}
            <span className="text-sm text-white ml-1">
            © {new Date().getFullYear()} 
            <a className="ml-1">made by</a>
            <a target="_blank" href="https://github.com/Carlos-RomeroRo" className="hover:text-blue-600 ml-1">
                 Carlos Romero.
            </a> All Rights Reserved.
            </span>
                    <ul className="flex justify-end items-center text-sm font-medium text-white sm:mt-0">
                            <li>
                                <p className="me-6">Contact me:</p>
                            </li>

                            <li className="hover:text-blue-600 me-3">
                                <a href="https://github.com/Carlos-RomeroRo" target="_blank">Github</a> 
                                <a href="https://github.com/Carlos-RomeroRo">
                                    <svg  className="inline mr-3 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                </a>
                            
                            </li>
                            <li className="me-3 hover:text-blue-600">
                                <a  href="https://www.linkedin.com/in/carlos-romero-626b08287/" target="_blank">Linkedin</a>
                                    <a href="https://www.linkedin.com/in/carlos-romero-626b08287/" target="_blank">
                                            <svg className="inline mr-3 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    </a>
                            </li>
                            <li className="me-3 hover:text-blue-600">
                                <ContactButton>

                                </ContactButton>
                            </li>
                        </ul>
            </div>
        </footer>
  );
}


export default Footer;