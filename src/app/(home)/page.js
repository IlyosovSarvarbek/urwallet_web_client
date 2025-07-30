"use client"

import SummaryCards from "@/components/SummaryCards";
import TransactionItem from "@/components/TransactionItem";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter()
    const {user, logout} = useAuth();
    useEffect(() => {
    if (user) router.replace("/sign-in");
  }, [user]);
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden overflow-y-auto">
      <div className="layout-container flex h-full grow flex-col">
        
        {/* MAIN */}
        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8">
          <div className="mx-auto max-w-5xl">
            {/* GREETING */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-primary tracking-tight">
                Welcome back, Sarah 👋
              </h2>
              <p className="text-secondary mt-1">
                Here's a summary of your financial activity.
              </p>
            </div>

            {/* SUMMARY CARDS */}
            <SummaryCards/>

            {/* TRANSACTIONS */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Recent Transactions
              </h3>
              <div className="rounded-lg border bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr className="text-left text-secondary">
                        <th className="px-6 py-3 font-medium tracking-wider">Title</th>
                        <th className="px-6 py-3 font-medium tracking-wider">Type</th>
                        <th className="px-6 py-3 font-medium tracking-wider text-right">Amount</th>
                        <th className="px-6 py-3 font-medium tracking-wider">Date</th>
                        <th className="px-6 py-3 font-medium tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                     
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Groceries"} type={"Expense"} date={"13.08.2010"} amount={"2000"}/>
                     <TransactionItem title={"Salary"} type={"Income"} date={"13.08.2010"} amount={"2000"}/>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
