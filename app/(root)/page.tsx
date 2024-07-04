import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Pranay", lastName: "Bhatkar", email: "pranaybhatkar81@gmail.com" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your account and transaction efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2000}
          />

        </header>

          Recent Transcations
        
        
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance : 125.62}, {currentBalance: 2563.25}]}/>

    </section>
  );
};

export default Home;
