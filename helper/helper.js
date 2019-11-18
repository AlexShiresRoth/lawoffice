exports.getServicesInfo = {
	services: [
		{
			title: 'Estate Planning',
			icon: 'book icon',
			ref: '/estate',
			subCat: ['Wills', 'Trusts', 'Power of Attorney', 'Business Succession Planning', 'Charitable Giving'],
		},
		{
			title: 'Estate Administration',
			icon: 'chart bar icon',
			ref: '/estateadmin',
			subCat: [
				'Probate',
				'Administration, Without A Will',
				'Asset Marshalling & Management',
				'Accounting & Distribution',
				'Challenges',
				'Non Resident Admin',
			],
		},
		{
			title: 'Real Estate',
			icon: 'building outline icon',
			ref: '/realestate',
			subCat: [
				'Purchasing or Selling A Home',
				'Purchasing or Selling Commercial Property',
				'Leasing',
				'Landlord/Tenant Issues',
				'Evictions',
			],
		},
		{
			title: 'Business Transactions',
			icon: 'address book outline icon',
			ref: '/business',
			subCat: [
				'Commercial Transactions',
				'Entity Formation, Modification or Termination',
				'Business Agreements',
				'Negotiations',
			],
		},
		{
			title: 'Bankruptcy',
			icon: 'address book outline icon',
			ref: '/bankruptcy',
			subCat: ['Chapter 7', 'Chapter 13'],
		},
		{
			title: 'Rental Property Management',
			icon: 'briefcase icon',
			ref: '/rental',
			subCat: [],
		},
		/*{
      title: "Bookkeeping Services",
      icon: "certificate icon",
      ref: "/bookkeeping",
      subCat: []
    }*/
	],

	serviceBtns: [
		{ title: 'Estate Administration' },
		{ title: 'Estate Planning' },
		{ title: 'Real Estate' },
		{ title: 'Rental Property Management' },
		{ title: 'Commercial Transaction' },
		{ title: 'Business Transactions' },
	],
};

module.exports = exports;
