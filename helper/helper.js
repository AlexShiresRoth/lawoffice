exports.getServicesInfo = (req, res) => {
  res.render("home", {
    services: [
      {
        title: "Wills, Trusts & Estates Law",
        icon: "book icon",
        ref: "/willsandtrusts"
      },
      { title: "Bankruptcy Law", icon: "chart bar icon", ref: "/bankruptcy" },
      {
        title: "Business Law",
        icon: "building outline icon",
        ref: "/business"
      },
      {
        title: "estate planning",
        icon: "address book outline icon",
        ref: "/estate"
      },
      { title: "probate law", icon: "briefcase icon", ref: "/probate" },
      { title: "Something Else", icon: "certificate icon", ref: "/" }
    ]
  });
};

module.exports = exports;
