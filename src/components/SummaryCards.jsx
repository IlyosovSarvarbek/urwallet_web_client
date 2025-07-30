import React from 'react'

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-lg border-2 bg-card border-border p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-secondary">
                    Total Balance
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet text-secondary" viewBox="0 0 16 16">
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"/>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">
                  $1,234.56
                </p>
              </div>

              <div className="rounded-lg border-2 border-income bg-card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-secondary">
                    Income
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up text-income" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">
                  $5,678.90
                </p>
              </div>

              <div className="rounded-lg border-2 border-expense bg-card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-secondary">
                    Expenses
                  </h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down text-expense" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                  </svg>
                </div>
                <p className="text-3xl font-bold text-primary mt-2">
                  $4,444.34
                </p>
              </div>
            </div>
  )
}

export default SummaryCards