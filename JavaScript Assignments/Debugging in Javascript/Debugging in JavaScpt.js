var invoiceDocuments = [
    {
      InvoiceID: 0o1,
      DocumentName: "Invoice 001",
      DocumentType: "invoice",
      Name: "Fly High Business Inc.",
      Product: [
        {
          Description: `24" Monitor`,
          QTY: 5,
          Price: 10000,
        },
        {
          Description: `Keyboard and Mouse set`,
          QTY: 4,
          Price: 1500,
        },
      ],
    },
    {
      InvoiceID: 0o2,
      DocumentName: "Invoice 002",
      DocumentType: "invoice",
      Name: "Bracket Logic Appliances Inc.",
      Product: [
        {
          Description: `Projector`,
          QTY: 2,
          Price: 15000,
        },
        {
          Description: `Speakerphone`,
          QTY: 1, // Fixed capitalization issue
          Price: 5500,
        },
        {
          Description: `Aircon`,
          QTY: 3,
          Price: 25200,
        },
      ],
    },
  ];
  
  function totalPerInvoice() {
    invoiceDocuments.forEach((data) => {
      console.log(`Invoice Name: ${data.DocumentName}`);
      let total = 0;
      let ProductDescription = data.Product.map((prod) => {
        total += prod.Price * prod.QTY; // Calculate the total for each product
        return `${prod.Description} - ₱${prod.Price} x ${prod.QTY}\n`;
      });
  
      console.log(`Products:`);
      console.log(`${ProductDescription.join("")}`);
      console.log(`-------------`);
      console.log(`Total: ₱${total}\n`);
    });
  }
  
  totalPerInvoice();
  