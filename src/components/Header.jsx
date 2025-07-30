import React from 'react'

const Header = () => {
  return (
        <header className="flex items-center justify-between border-b sticky z-10 bg-white top-0 left-0 border-border bg-card px-6 lg:px-10 py-4">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8 text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                <path d="M12 11H8V13H12V16L16 12L12 8V11Z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">Urwallet</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <span className="material-icons text-secondary">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" />
          </div>
        </header>
  )
}

export default Header