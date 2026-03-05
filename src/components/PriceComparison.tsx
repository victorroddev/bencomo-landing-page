export function PriceComparison() {
  const procedures = [
    { name: "Single Dental Implant", us: "$3,500 - $6,000", mexico: "$900 - $1,800", savings: "$2,600 - $4,200" },
    { name: "Porcelain Veneer (per tooth)", us: "$1,000 - $2,500", mexico: "$350 - $700", savings: "$650 - $1,800" },
    { name: "Dental Crown", us: "$1,000 - $3,000", mexico: "$300 - $800", savings: "$700 - $2,200" },
    { name: "Root Canal", us: "$800 - $1,500", mexico: "$200 - $400", savings: "$600 - $1,100" },
    { name: "All-on-4 Implants", us: "$20,000 - $40,000", mexico: "$6,000 - $12,000", savings: "$14,000 - $28,000" },
    { name: "Teeth Whitening", us: "$500 - $1,000", mexico: "$150 - $300", savings: "$350 - $700" }
  ];

  return (
    <section id="pricing" className="price-comparison">
      <div className="container">
        <div className="price-comparison-header">
          <h2>Price Comparison: US vs Mexico</h2>
          <p className="price-comparison-description">
            See how much you can save with the same quality care
          </p>
        </div>

        <div className="price-table-container">
          <div className="price-table">
            <table>
              <thead>
                <tr>
                  <th>Procedure</th>
                  <th>US Price</th>
                  <th>Mexico Price</th>
                  <th>Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {procedures.map((procedure, index) => (
                  <tr key={index}>
                    <td>{procedure.name}</td>
                    <td>{procedure.us}</td>
                    <td>{procedure.mexico}</td>
                    <td>{procedure.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="price-table-footer">
            <p>
              💡 <strong>Pro Tip:</strong> Even with travel and accommodation costs, most patients save thousands of dollars
            </p>
          </div>
        </div>

        <div className="price-stats">
          <div className="price-stat-card">
            <div className="price-stat-value">50-70%</div>
            <div className="price-stat-label">Average Savings</div>
            <div className="price-stat-description">On all procedures</div>
          </div>
          <div className="price-stat-card">
            <div className="price-stat-value">$8,500</div>
            <div className="price-stat-label">Average Total Saved</div>
            <div className="price-stat-description">Per patient visit</div>
          </div>
          <div className="price-stat-card">
            <div className="price-stat-value">100%</div>
            <div className="price-stat-label">Same Quality</div>
            <div className="price-stat-description">As top US clinics</div>
          </div>
        </div>
      </div>
    </section>
  );
}
