const Airport = require('../models/airport.model');
const Airline = require('../models/airline.model');

exports.airlines_load = async function () {

    var airlines = airlinesJSON();
  
    var airline;
    for (each in airlines) {
      airline = new Airline(airlines[each]);
      airline.save();
    }
  
  };
  
  exports.airports_load = async function () {
  
    var airports = airportsJSON();
  
    var airport;
    for (each in airports) {
      airport = new Airport(airports[each]);
      airport.save();
    }
  
  };
  
//Data

  function airlinesJSON() {
  
    return [
      {
        "IATA_CODE": "UA",
        "AIRLINE": "United Air Lines Inc."
      },
      {
        "IATA_CODE": "AA",
        "AIRLINE": "American Airlines Inc."
      },
      {
        "IATA_CODE": "US",
        "AIRLINE": "US Airways Inc."
      },
      {
        "IATA_CODE": "F9",
        "AIRLINE": "Frontier Airlines Inc."
      },
      {
        "IATA_CODE": "B6",
        "AIRLINE": "JetBlue Airways"
      },
      {
        "IATA_CODE": "OO",
        "AIRLINE": "Skywest Airlines Inc."
      },
      {
        "IATA_CODE": "AS",
        "AIRLINE": "Alaska Airlines Inc."
      },
      {
        "IATA_CODE": "NK",
        "AIRLINE": "Spirit Air Lines"
      },
      {
        "IATA_CODE": "WN",
        "AIRLINE": "Southwest Airlines Co."
      },
      {
        "IATA_CODE": "DL",
        "AIRLINE": "Delta Air Lines Inc."
      },
      {
        "IATA_CODE": "EV",
        "AIRLINE": "Atlantic Southeast Airlines"
      },
      {
        "IATA_CODE": "HA",
        "AIRLINE": "Hawaiian Airlines Inc."
      },
      {
        "IATA_CODE": "MQ",
        "AIRLINE": "American Eagle Airlines Inc."
      },
      {
        "IATA_CODE": "VX",
        "AIRLINE": "Virgin America"
      }
    ];
  
  }
  
  
  function airportsJSON() {
  
    return [
      {
        "IATA_CODE": "ABE",
        "AIRPORT": "Lehigh Valley International Airport",
        "CITY": "Allentown",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 40.65236,
        "LONGITUDE": -75.4404
      },
      {
        "IATA_CODE": "ABI",
        "AIRPORT": "Abilene Regional Airport",
        "CITY": "Abilene",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 32.41132,
        "LONGITUDE": -99.6819
      },
      {
        "IATA_CODE": "ABQ",
        "AIRPORT": "Albuquerque International Sunport",
        "CITY": "Albuquerque",
        "STATE": "NM",
        "COUNTRY": "USA",
        "LATITUDE": 35.04022,
        "LONGITUDE": -106.60919
      },
      {
        "IATA_CODE": "ABR",
        "AIRPORT": "Aberdeen Regional Airport",
        "CITY": "Aberdeen",
        "STATE": "SD",
        "COUNTRY": "USA",
        "LATITUDE": 45.44906,
        "LONGITUDE": -98.42183
      },
      {
        "IATA_CODE": "ABY",
        "AIRPORT": "Southwest Georgia Regional Airport",
        "CITY": "Albany",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 31.53552,
        "LONGITUDE": -84.19447
      },
      {
        "IATA_CODE": "ACK",
        "AIRPORT": "Nantucket Memorial Airport",
        "CITY": "Nantucket",
        "STATE": "MA",
        "COUNTRY": "USA",
        "LATITUDE": 41.25305,
        "LONGITUDE": -70.06018
      },
      {
        "IATA_CODE": "ACT",
        "AIRPORT": "Waco Regional Airport",
        "CITY": "Waco",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 31.61129,
        "LONGITUDE": -97.23052
      },
      {
        "IATA_CODE": "ACV",
        "AIRPORT": "Arcata Airport",
        "CITY": "Arcata/Eureka",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 40.97812,
        "LONGITUDE": -124.10862
      },
      {
        "IATA_CODE": "ACY",
        "AIRPORT": "Atlantic City International Airport",
        "CITY": "Atlantic City",
        "STATE": "NJ",
        "COUNTRY": "USA",
        "LATITUDE": 39.45758,
        "LONGITUDE": -74.57717
      },
      {
        "IATA_CODE": "ADK",
        "AIRPORT": "Adak Airport",
        "CITY": "Adak",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 51.87796,
        "LONGITUDE": -176.64603
      },
      {
        "IATA_CODE": "ADQ",
        "AIRPORT": "Kodiak Airport",
        "CITY": "Kodiak",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 57.74997,
        "LONGITUDE": -152.49386
      },
      {
        "IATA_CODE": "AEX",
        "AIRPORT": "Alexandria International Airport",
        "CITY": "Alexandria",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 31.32737,
        "LONGITUDE": -92.54856
      },
      {
        "IATA_CODE": "AGS",
        "AIRPORT": "Augusta Regional AirportÂ (Bush Field)",
        "CITY": "Augusta",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 33.36996,
        "LONGITUDE": -81.9645
      },
      {
        "IATA_CODE": "AKN",
        "AIRPORT": "King Salmon Airport",
        "CITY": "King Salmon",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 58.6768,
        "LONGITUDE": -156.64922
      },
      {
        "IATA_CODE": "ALB",
        "AIRPORT": "Albany International Airport",
        "CITY": "Albany",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 42.74812,
        "LONGITUDE": -73.80298
      },
      {
        "IATA_CODE": "ALO",
        "AIRPORT": "Waterloo Regional Airport",
        "CITY": "Waterloo",
        "STATE": "IA",
        "COUNTRY": "USA",
        "LATITUDE": 42.55708,
        "LONGITUDE": -92.40034
      },
      {
        "IATA_CODE": "AMA",
        "AIRPORT": "Rick Husband Amarillo International Airport",
        "CITY": "Amarillo",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 35.21937,
        "LONGITUDE": -101.70593
      },
      {
        "IATA_CODE": "ANC",
        "AIRPORT": "Ted Stevens Anchorage International Airport",
        "CITY": "Anchorage",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 61.17432,
        "LONGITUDE": -149.99619
      },
      {
        "IATA_CODE": "APN",
        "AIRPORT": "Alpena County Regional Airport",
        "CITY": "Alpena",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 45.07807,
        "LONGITUDE": -83.56029
      },
      {
        "IATA_CODE": "ASE",
        "AIRPORT": "Aspen-Pitkin County Airport",
        "CITY": "Aspen",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 39.22316,
        "LONGITUDE": -106.86885
      },
      {
        "IATA_CODE": "ATL",
        "AIRPORT": "Hartsfield-Jackson Atlanta International Airport",
        "CITY": "Atlanta",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 33.64044,
        "LONGITUDE": -84.42694
      },
      {
        "IATA_CODE": "ATW",
        "AIRPORT": "Appleton International Airport",
        "CITY": "Appleton",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 44.25741,
        "LONGITUDE": -88.51948
      },
      {
        "IATA_CODE": "AUS",
        "AIRPORT": "Austin-Bergstrom International Airport",
        "CITY": "Austin",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 30.19453,
        "LONGITUDE": -97.66987
      },
      {
        "IATA_CODE": "AVL",
        "AIRPORT": "Asheville Regional Airport",
        "CITY": "Asheville",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 35.43619,
        "LONGITUDE": -82.54181
      },
      {
        "IATA_CODE": "AVP",
        "AIRPORT": "Wilkes-Barre/Scranton International Airport",
        "CITY": "Wilkes-Barre/Scranton",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 41.33815,
        "LONGITUDE": -75.72427
      },
      {
        "IATA_CODE": "AZO",
        "AIRPORT": "Kalamazoo/Battle Creek International Airport",
        "CITY": "Kalamazoo",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 42.23488,
        "LONGITUDE": -85.55206
      },
      {
        "IATA_CODE": "BDL",
        "AIRPORT": "Bradley International Airport",
        "CITY": "Windsor Locks",
        "STATE": "CT",
        "COUNTRY": "USA",
        "LATITUDE": 41.93887,
        "LONGITUDE": -72.68323
      },
      {
        "IATA_CODE": "BET",
        "AIRPORT": "Bethel Airport",
        "CITY": "Bethel",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 60.77978,
        "LONGITUDE": -161.838
      },
      {
        "IATA_CODE": "BFL",
        "AIRPORT": "Meadows Field",
        "CITY": "Bakersfield",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 35.4336,
        "LONGITUDE": -119.05677
      },
      {
        "IATA_CODE": "BGM",
        "AIRPORT": "Greater Binghamton Airport",
        "CITY": "Binghamton",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 42.20848,
        "LONGITUDE": -75.97961
      },
      {
        "IATA_CODE": "BGR",
        "AIRPORT": "Bangor International Airport",
        "CITY": "Bangor",
        "STATE": "ME",
        "COUNTRY": "USA",
        "LATITUDE": 44.80744,
        "LONGITUDE": -68.82814
      },
      {
        "IATA_CODE": "BHM",
        "AIRPORT": "Birmingham-Shuttlesworth International Airport",
        "CITY": "Birmingham",
        "STATE": "AL",
        "COUNTRY": "USA",
        "LATITUDE": 33.56294,
        "LONGITUDE": -86.75355
      },
      {
        "IATA_CODE": "BIL",
        "AIRPORT": "Billings Logan International Airport",
        "CITY": "Billings",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 45.80766,
        "LONGITUDE": -108.54286
      },
      {
        "IATA_CODE": "BIS",
        "AIRPORT": "Bismarck Municipal Airport",
        "CITY": "Bismarck",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 46.77411,
        "LONGITUDE": -100.74672
      },
      {
        "IATA_CODE": "BJI",
        "AIRPORT": "Bemidji Regional Airport",
        "CITY": "Bemidji",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 47.50942,
        "LONGITUDE": -94.93372
      },
      {
        "IATA_CODE": "BLI",
        "AIRPORT": "Bellingham International Airport",
        "CITY": "Bellingham",
        "STATE": "WA",
        "COUNTRY": "USA",
        "LATITUDE": 48.79275,
        "LONGITUDE": -122.53753
      },
      {
        "IATA_CODE": "BMI",
        "AIRPORT": "Central Illinois Regional Airport at Bloomington-Normal",
        "CITY": "Bloomington",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 40.47799,
        "LONGITUDE": -88.91595
      },
      {
        "IATA_CODE": "BNA",
        "AIRPORT": "Nashville International Airport",
        "CITY": "Nashville",
        "STATE": "TN",
        "COUNTRY": "USA",
        "LATITUDE": 36.12448,
        "LONGITUDE": -86.67818
      },
      {
        "IATA_CODE": "BOI",
        "AIRPORT": "Boise AirportÂ (Boise Air Terminal)",
        "CITY": "Boise",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 43.56444,
        "LONGITUDE": -116.22278
      },
      {
        "IATA_CODE": "BOS",
        "AIRPORT": "Gen. Edward Lawrence Logan International Airport",
        "CITY": "Boston",
        "STATE": "MA",
        "COUNTRY": "USA",
        "LATITUDE": 42.36435,
        "LONGITUDE": -71.00518
      },
      {
        "IATA_CODE": "BPT",
        "AIRPORT": "Jack Brooks Regional AirportÂ (Southeast Texas Regional)",
        "CITY": "Beaumont/Port Arthur",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 29.95083,
        "LONGITUDE": -94.02069
      },
      {
        "IATA_CODE": "BQK",
        "AIRPORT": "Brunswick Golden Isles Airport",
        "CITY": "Brunswick",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 31.25903,
        "LONGITUDE": -81.46631
      },
      {
        "IATA_CODE": "BQN",
        "AIRPORT": "Rafael HernÃ¡ndez Airport",
        "CITY": "Aguadilla",
        "STATE": "PR",
        "COUNTRY": "USA",
        "LATITUDE": 18.49486,
        "LONGITUDE": -67.12944
      },
      {
        "IATA_CODE": "BRD",
        "AIRPORT": "Brainerd Lakes Regional Airport",
        "CITY": "Brainerd",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 46.39786,
        "LONGITUDE": -94.13723
      },
      {
        "IATA_CODE": "BRO",
        "AIRPORT": "Brownsville/South Padre Island International Airport",
        "CITY": "Brownsville",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 25.90683,
        "LONGITUDE": -97.42586
      },
      {
        "IATA_CODE": "BRW",
        "AIRPORT": "Wiley Post-Will Rogers Memorial Airport",
        "CITY": "Barrow",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 71.28545,
        "LONGITUDE": -156.766
      },
      {
        "IATA_CODE": "BTM",
        "AIRPORT": "Bert Mooney Airport",
        "CITY": "Butte",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 45.9548,
        "LONGITUDE": -112.49746
      },
      {
        "IATA_CODE": "BTR",
        "AIRPORT": "Baton Rouge Metropolitan Airport",
        "CITY": "Baton Rouge",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 30.53316,
        "LONGITUDE": -91.14963
      },
      {
        "IATA_CODE": "BTV",
        "AIRPORT": "Burlington International Airport",
        "CITY": "Burlington",
        "STATE": "VT",
        "COUNTRY": "USA",
        "LATITUDE": 44.473,
        "LONGITUDE": -73.15031
      },
      {
        "IATA_CODE": "BUF",
        "AIRPORT": "Buffalo Niagara International Airport",
        "CITY": "Buffalo",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 42.94052,
        "LONGITUDE": -78.73217
      },
      {
        "IATA_CODE": "BUR",
        "AIRPORT": "Bob Hope AirportÂ (Hollywood Burbank Airport)",
        "CITY": "Burbank",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 34.20062,
        "LONGITUDE": -118.3585
      },
      {
        "IATA_CODE": "BWI",
        "AIRPORT": "Baltimore-Washington International Airport",
        "CITY": "Baltimore",
        "STATE": "MD",
        "COUNTRY": "USA",
        "LATITUDE": 39.1754,
        "LONGITUDE": -76.6682
      },
      {
        "IATA_CODE": "BZN",
        "AIRPORT": "Bozeman Yellowstone International AirportÂ (Gallatin Field Airport)",
        "CITY": "Bozeman",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 45.7769,
        "LONGITUDE": -111.15301
      },
      {
        "IATA_CODE": "CAE",
        "AIRPORT": "Columbia Metropolitan Airport",
        "CITY": "Columbia",
        "STATE": "SC",
        "COUNTRY": "USA",
        "LATITUDE": 33.93884,
        "LONGITUDE": -81.11954
      },
      {
        "IATA_CODE": "CAK",
        "AIRPORT": "Akron-Canton Regional Airport",
        "CITY": "Akron",
        "STATE": "OH",
        "COUNTRY": "USA",
        "LATITUDE": 40.91631,
        "LONGITUDE": -81.44247
      },
      {
        "IATA_CODE": "CDC",
        "AIRPORT": "Cedar City Regional Airport",
        "CITY": "Cedar City",
        "STATE": "UT",
        "COUNTRY": "USA",
        "LATITUDE": 37.70097,
        "LONGITUDE": -113.09858
      },
      {
        "IATA_CODE": "CDV",
        "AIRPORT": "Merle K. (Mudhole) Smith Airport",
        "CITY": "Cordova",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 60.49183,
        "LONGITUDE": -145.47765
      },
      {
        "IATA_CODE": "CEC",
        "AIRPORT": "Del Norte County AirportÂ (Jack McNamara Field)",
        "CITY": "Crescent City",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 41.78016,
        "LONGITUDE": -124.23653
      },
      {
        "IATA_CODE": "CHA",
        "AIRPORT": "Chattanooga Metropolitan AirportÂ (Lovell Field)",
        "CITY": "Chattanooga",
        "STATE": "TN",
        "COUNTRY": "USA",
        "LATITUDE": 35.03527,
        "LONGITUDE": -85.20379
      },
      {
        "IATA_CODE": "CHO",
        "AIRPORT": "Charlottesville-Albemarle Airport",
        "CITY": "Charlottesville",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 38.13864,
        "LONGITUDE": -78.45286
      },
      {
        "IATA_CODE": "CHS",
        "AIRPORT": "Charleston International Airport/Charleston AFB",
        "CITY": "Charleston",
        "STATE": "SC",
        "COUNTRY": "USA",
        "LATITUDE": 32.89865,
        "LONGITUDE": -80.04051
      },
      {
        "IATA_CODE": "CID",
        "AIRPORT": "The Eastern Iowa Airport",
        "CITY": "Cedar Rapids",
        "STATE": "IA",
        "COUNTRY": "USA",
        "LATITUDE": 41.88459,
        "LONGITUDE": -91.71087
      },
      {
        "IATA_CODE": "CIU",
        "AIRPORT": "Chippewa County International Airport",
        "CITY": "Sault Ste. Marie",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 46.25075,
        "LONGITUDE": -84.47239
      },
      {
        "IATA_CODE": "CLD",
        "AIRPORT": "McClellan-Palomar Airport",
        "CITY": "San Diego",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 33.12723,
        "LONGITUDE": -117.27873
      },
      {
        "IATA_CODE": "CLE",
        "AIRPORT": "Cleveland Hopkins International Airport",
        "CITY": "Cleveland",
        "STATE": "OH",
        "COUNTRY": "USA",
        "LATITUDE": 41.41089,
        "LONGITUDE": -81.8494
      },
      {
        "IATA_CODE": "CLL",
        "AIRPORT": "Easterwood Airport",
        "CITY": "College Station",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 30.58859,
        "LONGITUDE": -96.36382
      },
      {
        "IATA_CODE": "CLT",
        "AIRPORT": "Charlotte Douglas International Airport",
        "CITY": "Charlotte",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 35.21401,
        "LONGITUDE": -80.94313
      },
      {
        "IATA_CODE": "CMH",
        "AIRPORT": "Port Columbus International Airport",
        "CITY": "Columbus",
        "STATE": "OH",
        "COUNTRY": "USA",
        "LATITUDE": 39.99799,
        "LONGITUDE": -82.89188
      },
      {
        "IATA_CODE": "CMI",
        "AIRPORT": "University of Illinois - Willard Airport",
        "CITY": "Champaign/Urbana",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 40.03925,
        "LONGITUDE": -88.27806
      },
      {
        "IATA_CODE": "CMX",
        "AIRPORT": "Houghton County Memorial Airport",
        "CITY": "Hancock",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 47.16842,
        "LONGITUDE": -88.48906
      },
      {
        "IATA_CODE": "CNY",
        "AIRPORT": "Canyonlands Field",
        "CITY": "Moab",
        "STATE": "UT",
        "COUNTRY": "USA",
        "LATITUDE": 38.75496,
        "LONGITUDE": -109.75484
      },
      {
        "IATA_CODE": "COD",
        "AIRPORT": "Yellowstone Regional Airport",
        "CITY": "Cody",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 44.52019,
        "LONGITUDE": -109.0238
      },
      {
        "IATA_CODE": "COS",
        "AIRPORT": "City of Colorado Springs Municipal Airport",
        "CITY": "Colorado Springs",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 38.80581,
        "LONGITUDE": -104.70025
      },
      {
        "IATA_CODE": "COU",
        "AIRPORT": "Columbia Regional Airport",
        "CITY": "Columbia",
        "STATE": "MO",
        "COUNTRY": "USA",
        "LATITUDE": 38.81809,
        "LONGITUDE": -92.21963
      },
      {
        "IATA_CODE": "CPR",
        "AIRPORT": "Natrona County International Airport",
        "CITY": "Casper",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 42.90836,
        "LONGITUDE": -106.46447
      },
      {
        "IATA_CODE": "CRP",
        "AIRPORT": "Corpus Christi International Airport",
        "CITY": "Corpus Christi",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 27.77036,
        "LONGITUDE": -97.50122
      },
      {
        "IATA_CODE": "CRW",
        "AIRPORT": "Yeager Airport",
        "CITY": "Charleston",
        "STATE": "WV",
        "COUNTRY": "USA",
        "LATITUDE": 38.37315,
        "LONGITUDE": -81.59319
      },
      {
        "IATA_CODE": "CSG",
        "AIRPORT": "Columbus Metropolitan Airport",
        "CITY": "Columbus",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 32.51633,
        "LONGITUDE": -84.93886
      },
      {
        "IATA_CODE": "CVG",
        "AIRPORT": "Cincinnati/Northern Kentucky International Airport",
        "CITY": "Covington",
        "STATE": "KY",
        "COUNTRY": "USA",
        "LATITUDE": 39.04614,
        "LONGITUDE": -84.66217
      },
      {
        "IATA_CODE": "CWA",
        "AIRPORT": "Central Wisconsin Airport",
        "CITY": "Mosinee",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 44.77762,
        "LONGITUDE": -89.66678
      },
      {
        "IATA_CODE": "DAB",
        "AIRPORT": "Daytona Beach International Airport",
        "CITY": "Daytona Beach",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 29.17992,
        "LONGITUDE": -81.05806
      },
      {
        "IATA_CODE": "DAL",
        "AIRPORT": "Dallas Love Field",
        "CITY": "Dallas",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 32.84711,
        "LONGITUDE": -96.85177
      },
      {
        "IATA_CODE": "DAY",
        "AIRPORT": "James M. Cox Dayton International Airport",
        "CITY": "Dayton",
        "STATE": "OH",
        "COUNTRY": "USA",
        "LATITUDE": 39.90238,
        "LONGITUDE": -84.21938
      },
      {
        "IATA_CODE": "DBQ",
        "AIRPORT": "Dubuque Regional Airport",
        "CITY": "Dubuque",
        "STATE": "IA",
        "COUNTRY": "USA",
        "LATITUDE": 42.40296,
        "LONGITUDE": -90.70917
      },
      {
        "IATA_CODE": "DCA",
        "AIRPORT": "Ronald Reagan Washington National Airport",
        "CITY": "Arlington",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 38.85208,
        "LONGITUDE": -77.03772
      },
      {
        "IATA_CODE": "DEN",
        "AIRPORT": "Denver International Airport",
        "CITY": "Denver",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 39.85841,
        "LONGITUDE": -104.667
      },
      {
        "IATA_CODE": "DFW",
        "AIRPORT": "Dallas/Fort Worth International Airport",
        "CITY": "Dallas-Fort Worth",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 32.89595,
        "LONGITUDE": -97.0372
      },
      {
        "IATA_CODE": "DHN",
        "AIRPORT": "Dothan Regional Airport",
        "CITY": "Dothan",
        "STATE": "AL",
        "COUNTRY": "USA",
        "LATITUDE": 31.32134,
        "LONGITUDE": -85.44963
      },
      {
        "IATA_CODE": "DIK",
        "AIRPORT": "Dickinson Theodore Roosevelt Regional Airport",
        "CITY": "Dickinson",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 46.79739,
        "LONGITUDE": -102.80195
      },
      {
        "IATA_CODE": "DLG",
        "AIRPORT": "Dillingham Airport",
        "CITY": "Dillingham",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 59.04541,
        "LONGITUDE": -158.50334
      },
      {
        "IATA_CODE": "DLH",
        "AIRPORT": "Duluth International Airport",
        "CITY": "Duluth",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 46.84209,
        "LONGITUDE": -92.19365
      },
      {
        "IATA_CODE": "DRO",
        "AIRPORT": "Durango-La Plata County Airport",
        "CITY": "Durango",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 37.15152,
        "LONGITUDE": -107.75377
      },
      {
        "IATA_CODE": "DSM",
        "AIRPORT": "Des Moines International Airport",
        "CITY": "Des Moines",
        "STATE": "IA",
        "COUNTRY": "USA",
        "LATITUDE": 41.53493,
        "LONGITUDE": -93.66068
      },
      {
        "IATA_CODE": "DTW",
        "AIRPORT": "Detroit Metropolitan Airport",
        "CITY": "Detroit",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 42.21206,
        "LONGITUDE": -83.34884
      },
      {
        "IATA_CODE": "DVL",
        "AIRPORT": "Devils Lake Regional Airport",
        "CITY": "Devils Lake",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 48.11425,
        "LONGITUDE": -98.90878
      },
      {
        "IATA_CODE": "EAU",
        "AIRPORT": "Chippewa Valley Regional Airport",
        "CITY": "Eau Claire",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 44.86526,
        "LONGITUDE": -91.48507
      },
      {
        "IATA_CODE": "ECP",
        "AIRPORT": "Northwest Florida Beaches International Airport",
        "CITY": "Panama City",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": "",
        "LONGITUDE": ""
      },
      {
        "IATA_CODE": "EGE",
        "AIRPORT": "Eagle County Regional Airport",
        "CITY": "Eagle",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 39.64257,
        "LONGITUDE": -106.9177
      },
      {
        "IATA_CODE": "EKO",
        "AIRPORT": "Elko Regional Airport",
        "CITY": "Elko",
        "STATE": "NV",
        "COUNTRY": "USA",
        "LATITUDE": 40.82493,
        "LONGITUDE": -115.7917
      },
      {
        "IATA_CODE": "ELM",
        "AIRPORT": "Elmira/Corning Regional Airport",
        "CITY": "Elmira",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 42.15991,
        "LONGITUDE": -76.89144
      },
      {
        "IATA_CODE": "ELP",
        "AIRPORT": "El Paso International Airport",
        "CITY": "El Paso",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 31.80667,
        "LONGITUDE": -106.37781
      },
      {
        "IATA_CODE": "ERI",
        "AIRPORT": "Erie International Airport",
        "CITY": "Erie",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 42.08202,
        "LONGITUDE": -80.17622
      },
      {
        "IATA_CODE": "ESC",
        "AIRPORT": "Delta County Airport",
        "CITY": "Escanaba",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 45.72267,
        "LONGITUDE": -87.09373
      },
      {
        "IATA_CODE": "EUG",
        "AIRPORT": "Eugene AirportÂ (Mahlon Sweet Field)",
        "CITY": "Eugene",
        "STATE": "OR",
        "COUNTRY": "USA",
        "LATITUDE": 44.12326,
        "LONGITUDE": -123.21869
      },
      {
        "IATA_CODE": "EVV",
        "AIRPORT": "Evansville Regional Airport",
        "CITY": "Evansville",
        "STATE": "IN",
        "COUNTRY": "USA",
        "LATITUDE": 38.03799,
        "LONGITUDE": -87.53063
      },
      {
        "IATA_CODE": "EWN",
        "AIRPORT": "Coastal Carolina Regional AirportÂ (Craven County Regional)",
        "CITY": "New Bern",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 35.07297,
        "LONGITUDE": -77.04294
      },
      {
        "IATA_CODE": "EWR",
        "AIRPORT": "Newark Liberty International Airport",
        "CITY": "Newark",
        "STATE": "NJ",
        "COUNTRY": "USA",
        "LATITUDE": 40.6925,
        "LONGITUDE": -74.16866
      },
      {
        "IATA_CODE": "EYW",
        "AIRPORT": "Key West International Airport",
        "CITY": "Key West",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 24.55611,
        "LONGITUDE": -81.75956
      },
      {
        "IATA_CODE": "FAI",
        "AIRPORT": "Fairbanks International Airport",
        "CITY": "Fairbanks",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 64.81368,
        "LONGITUDE": -147.85967
      },
      {
        "IATA_CODE": "FAR",
        "AIRPORT": "Hector International Airport",
        "CITY": "Fargo",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 46.91935,
        "LONGITUDE": -96.81499
      },
      {
        "IATA_CODE": "FAT",
        "AIRPORT": "Fresno Yosemite International Airport",
        "CITY": "Fresno",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 36.77619,
        "LONGITUDE": -119.71814
      },
      {
        "IATA_CODE": "FAY",
        "AIRPORT": "Fayetteville Regional Airport",
        "CITY": "Fayetteville",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 34.99147,
        "LONGITUDE": -78.88
      },
      {
        "IATA_CODE": "FCA",
        "AIRPORT": "Glacier Park International Airport",
        "CITY": "Kalispell",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 48.3114,
        "LONGITUDE": -114.25507
      },
      {
        "IATA_CODE": "FLG",
        "AIRPORT": "Flagstaff Pulliam Airport",
        "CITY": "Flagstaff",
        "STATE": "AZ",
        "COUNTRY": "USA",
        "LATITUDE": 35.13845,
        "LONGITUDE": -111.67122
      },
      {
        "IATA_CODE": "FLL",
        "AIRPORT": "Fort Lauderdale-Hollywood International Airport",
        "CITY": "Ft. Lauderdale",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 26.07258,
        "LONGITUDE": -80.15275
      },
      {
        "IATA_CODE": "FNT",
        "AIRPORT": "Bishop International Airport",
        "CITY": "Flint",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 42.9655,
        "LONGITUDE": -83.74346
      },
      {
        "IATA_CODE": "FSD",
        "AIRPORT": "Sioux Falls Regional Airport",
        "CITY": "Sioux Falls",
        "STATE": "SD",
        "COUNTRY": "USA",
        "LATITUDE": 43.58135,
        "LONGITUDE": -96.7417
      },
      {
        "IATA_CODE": "FSM",
        "AIRPORT": "Fort Smith Regional Airport",
        "CITY": "Fort Smith",
        "STATE": "AR",
        "COUNTRY": "USA",
        "LATITUDE": 35.33659,
        "LONGITUDE": -94.36744
      },
      {
        "IATA_CODE": "FWA",
        "AIRPORT": "Fort Wayne International Airport",
        "CITY": "Fort Wayne",
        "STATE": "IN",
        "COUNTRY": "USA",
        "LATITUDE": 40.97847,
        "LONGITUDE": -85.19515
      },
      {
        "IATA_CODE": "GCC",
        "AIRPORT": "Gillette-Campbell County Airport",
        "CITY": "Gillette",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 44.3489,
        "LONGITUDE": -105.53936
      },
      {
        "IATA_CODE": "GCK",
        "AIRPORT": "Garden City Regional Airport",
        "CITY": "Garden City",
        "STATE": "KS",
        "COUNTRY": "USA",
        "LATITUDE": 37.92752,
        "LONGITUDE": -100.72441
      },
      {
        "IATA_CODE": "GEG",
        "AIRPORT": "Spokane International Airport",
        "CITY": "Spokane",
        "STATE": "WA",
        "COUNTRY": "USA",
        "LATITUDE": 47.61986,
        "LONGITUDE": -117.53384
      },
      {
        "IATA_CODE": "GFK",
        "AIRPORT": "Grand Forks International Airport",
        "CITY": "Grand Forks",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 47.94926,
        "LONGITUDE": -97.17611
      },
      {
        "IATA_CODE": "GGG",
        "AIRPORT": "East Texas Regional Airport",
        "CITY": "Longview",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 32.38486,
        "LONGITUDE": -94.71171
      },
      {
        "IATA_CODE": "GJT",
        "AIRPORT": "Grand Junction Regional AirportÂ (Walker Field)",
        "CITY": "Grand Junction",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 39.12241,
        "LONGITUDE": -108.52673
      },
      {
        "IATA_CODE": "GNV",
        "AIRPORT": "Gainesville Regional Airport",
        "CITY": "Gainesville",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 29.69006,
        "LONGITUDE": -82.27178
      },
      {
        "IATA_CODE": "GPT",
        "AIRPORT": "Gulfport-Biloxi International Airport",
        "CITY": "Gulfport-Biloxi",
        "STATE": "MS",
        "COUNTRY": "USA",
        "LATITUDE": 30.40728,
        "LONGITUDE": -89.07009
      },
      {
        "IATA_CODE": "GRB",
        "AIRPORT": "Green Bay-Austin Straubel International Airport",
        "CITY": "Green Bay",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 44.48507,
        "LONGITUDE": -88.12959
      },
      {
        "IATA_CODE": "GRI",
        "AIRPORT": "Central Nebraska Regional Airport",
        "CITY": "Grand Island",
        "STATE": "NE",
        "COUNTRY": "USA",
        "LATITUDE": 40.96747,
        "LONGITUDE": -98.30861
      },
      {
        "IATA_CODE": "GRK",
        "AIRPORT": "Killeen-Fort Hood Regional Airport",
        "CITY": "Killeen",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 31.0649,
        "LONGITUDE": -97.8278
      },
      {
        "IATA_CODE": "GRR",
        "AIRPORT": "Gerald R. Ford International Airport",
        "CITY": "Grand Rapids",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 42.88082,
        "LONGITUDE": -85.52277
      },
      {
        "IATA_CODE": "GSO",
        "AIRPORT": "Piedmont Triad International Airport",
        "CITY": "Greensboro",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 36.09775,
        "LONGITUDE": -79.9373
      },
      {
        "IATA_CODE": "GSP",
        "AIRPORT": "Greenville-Spartanburg International Airport",
        "CITY": "Greer",
        "STATE": "SC",
        "COUNTRY": "USA",
        "LATITUDE": 34.89567,
        "LONGITUDE": -82.21886
      },
      {
        "IATA_CODE": "GST",
        "AIRPORT": "Gustavus Airport",
        "CITY": "Gustavus",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 58.42438,
        "LONGITUDE": -135.70738
      },
      {
        "IATA_CODE": "GTF",
        "AIRPORT": "Great Falls International Airport",
        "CITY": "Great Falls",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 47.482,
        "LONGITUDE": -111.37069
      },
      {
        "IATA_CODE": "GTR",
        "AIRPORT": "Golden Triangle Regional Airport",
        "CITY": "Columbus-Starkville-West Point",
        "STATE": "MS",
        "COUNTRY": "USA",
        "LATITUDE": 33.45033,
        "LONGITUDE": -88.59137
      },
      {
        "IATA_CODE": "GUC",
        "AIRPORT": "Gunnison-Crested Butte Regional Airport",
        "CITY": "Gunnison",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 38.53396,
        "LONGITUDE": -106.93318
      },
      {
        "IATA_CODE": "GUM",
        "AIRPORT": "Guam International Airport",
        "CITY": "Agana",
        "STATE": "GU",
        "COUNTRY": "USA",
        "LATITUDE": 13.48345,
        "LONGITUDE": -144.79598
      },
      {
        "IATA_CODE": "HDN",
        "AIRPORT": "Yampa Valley AirportÂ (Yampa Valley Regional)",
        "CITY": "Hayden",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 40.48118,
        "LONGITUDE": -107.21766
      },
      {
        "IATA_CODE": "HIB",
        "AIRPORT": "Range Regional AirportÂ (Chisholm-Hibbing Airport)",
        "CITY": "Hibbing",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 47.3866,
        "LONGITUDE": -92.83899
      },
      {
        "IATA_CODE": "HLN",
        "AIRPORT": "Helena Regional Airport",
        "CITY": "Helena",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 46.60682,
        "LONGITUDE": -111.98275
      },
      {
        "IATA_CODE": "HNL",
        "AIRPORT": "Honolulu International Airport",
        "CITY": "Honolulu",
        "STATE": "HI",
        "COUNTRY": "USA",
        "LATITUDE": 21.31869,
        "LONGITUDE": -157.92241
      },
      {
        "IATA_CODE": "HOB",
        "AIRPORT": "Lea County Regional Airport",
        "CITY": "Hobbs",
        "STATE": "NM",
        "COUNTRY": "USA",
        "LATITUDE": 32.68753,
        "LONGITUDE": -103.21703
      },
      {
        "IATA_CODE": "HOU",
        "AIRPORT": "William P. Hobby Airport",
        "CITY": "Houston",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 29.64542,
        "LONGITUDE": -95.27889
      },
      {
        "IATA_CODE": "HPN",
        "AIRPORT": "Westchester County Airport",
        "CITY": "White Plains",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 41.06696,
        "LONGITUDE": -73.70757
      },
      {
        "IATA_CODE": "HRL",
        "AIRPORT": "Valley International Airport",
        "CITY": "Harlingen",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 26.22851,
        "LONGITUDE": -97.65439
      },
      {
        "IATA_CODE": "HSV",
        "AIRPORT": "Huntsville International Airport",
        "CITY": "Huntsville",
        "STATE": "AL",
        "COUNTRY": "USA",
        "LATITUDE": 34.64045,
        "LONGITUDE": -86.77311
      },
      {
        "IATA_CODE": "HYA",
        "AIRPORT": "Barnstable Municipal Airport",
        "CITY": "Hyannis",
        "STATE": "MA",
        "COUNTRY": "USA",
        "LATITUDE": 41.66934,
        "LONGITUDE": -70.28036
      },
      {
        "IATA_CODE": "HYS",
        "AIRPORT": "Hays Regional Airport",
        "CITY": "Hays",
        "STATE": "KS",
        "COUNTRY": "USA",
        "LATITUDE": 38.84494,
        "LONGITUDE": -99.27403
      },
      {
        "IATA_CODE": "IAD",
        "AIRPORT": "Washington Dulles International Airport",
        "CITY": "Chantilly",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 38.94453,
        "LONGITUDE": -77.45581
      },
      {
        "IATA_CODE": "IAG",
        "AIRPORT": "Niagara Falls International Airport",
        "CITY": "Niagara Falls",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 43.10726,
        "LONGITUDE": -78.94538
      },
      {
        "IATA_CODE": "IAH",
        "AIRPORT": "George Bush Intercontinental Airport",
        "CITY": "Houston",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 29.98047,
        "LONGITUDE": -95.33972
      },
      {
        "IATA_CODE": "ICT",
        "AIRPORT": "Wichita Dwight D. Eisenhower National AirportÂ (Wichita Mid-Continent Airport)",
        "CITY": "Wichita",
        "STATE": "KS",
        "COUNTRY": "USA",
        "LATITUDE": 37.64996,
        "LONGITUDE": -97.43305
      },
      {
        "IATA_CODE": "IDA",
        "AIRPORT": "Idaho Falls Regional Airport",
        "CITY": "Idaho Falls",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 43.51456,
        "LONGITUDE": -112.07017
      },
      {
        "IATA_CODE": "ILG",
        "AIRPORT": "Wilmington Airport",
        "CITY": "Wilmington",
        "STATE": "DE",
        "COUNTRY": "USA",
        "LATITUDE": 39.67872,
        "LONGITUDE": -75.60653
      },
      {
        "IATA_CODE": "ILM",
        "AIRPORT": "Wilmington International Airport",
        "CITY": "Wilmington",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 34.27061,
        "LONGITUDE": -77.90256
      },
      {
        "IATA_CODE": "IMT",
        "AIRPORT": "Ford Airport",
        "CITY": "Iron Mountain/Kingsford",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 45.81835,
        "LONGITUDE": -88.11454
      },
      {
        "IATA_CODE": "IND",
        "AIRPORT": "Indianapolis International Airport",
        "CITY": "Indianapolis",
        "STATE": "IN",
        "COUNTRY": "USA",
        "LATITUDE": 39.71733,
        "LONGITUDE": -86.29438
      },
      {
        "IATA_CODE": "INL",
        "AIRPORT": "Falls International Airport",
        "CITY": "International Falls",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 48.56619,
        "LONGITUDE": -93.40307
      },
      {
        "IATA_CODE": "ISN",
        "AIRPORT": "Sloulin Field International Airport",
        "CITY": "Williston",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 48.17794,
        "LONGITUDE": -103.64235
      },
      {
        "IATA_CODE": "ISP",
        "AIRPORT": "Long Island MacArthur Airport",
        "CITY": "Islip",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 40.79524,
        "LONGITUDE": -73.10021
      },
      {
        "IATA_CODE": "ITH",
        "AIRPORT": "Ithaca Tompkins Regional Airport",
        "CITY": "Ithaca",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 42.49103,
        "LONGITUDE": -76.45844
      },
      {
        "IATA_CODE": "ITO",
        "AIRPORT": "Hilo International Airport",
        "CITY": "Hilo",
        "STATE": "HI",
        "COUNTRY": "USA",
        "LATITUDE": 19.72026,
        "LONGITUDE": -155.04847
      },
      {
        "IATA_CODE": "JAC",
        "AIRPORT": "Jackson Hole Airport",
        "CITY": "Jackson",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 43.60732,
        "LONGITUDE": -110.73774
      },
      {
        "IATA_CODE": "JAN",
        "AIRPORT": "Jackson-Evers International Airport",
        "CITY": "Jackson",
        "STATE": "MS",
        "COUNTRY": "USA",
        "LATITUDE": 32.31117,
        "LONGITUDE": -90.07589
      },
      {
        "IATA_CODE": "JAX",
        "AIRPORT": "Jacksonville International Airport",
        "CITY": "Jacksonville",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 30.49406,
        "LONGITUDE": -81.68786
      },
      {
        "IATA_CODE": "JFK",
        "AIRPORT": "John F. Kennedy International AirportÂ (New York International Airport)",
        "CITY": "New York",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 40.63975,
        "LONGITUDE": -73.77893
      },
      {
        "IATA_CODE": "JLN",
        "AIRPORT": "Joplin Regional Airport",
        "CITY": "Joplin",
        "STATE": "MO",
        "COUNTRY": "USA",
        "LATITUDE": 37.15181,
        "LONGITUDE": -94.49827
      },
      {
        "IATA_CODE": "JMS",
        "AIRPORT": "Jamestown Regional Airport",
        "CITY": "Jamestown",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 46.92972,
        "LONGITUDE": -98.6782
      },
      {
        "IATA_CODE": "JNU",
        "AIRPORT": "Juneau International Airport",
        "CITY": "Juneau",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 58.35496,
        "LONGITUDE": -134.57628
      },
      {
        "IATA_CODE": "KOA",
        "AIRPORT": "Kona International Airport at Keahole",
        "CITY": "Kailua/Kona",
        "STATE": "HI",
        "COUNTRY": "USA",
        "LATITUDE": 19.73877,
        "LONGITUDE": -156.04563
      },
      {
        "IATA_CODE": "KTN",
        "AIRPORT": "Ketchikan International Airport",
        "CITY": "Ketchikan",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 55.35557,
        "LONGITUDE": -131.71374
      },
      {
        "IATA_CODE": "LAN",
        "AIRPORT": "Capital Region International AirportÂ ( Lansing Capital City)",
        "CITY": "Lansing",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 42.7787,
        "LONGITUDE": -84.58736
      },
      {
        "IATA_CODE": "LAR",
        "AIRPORT": "Laramie Regional Airport",
        "CITY": "Laramie",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 41.31205,
        "LONGITUDE": -105.67499
      },
      {
        "IATA_CODE": "LAS",
        "AIRPORT": "McCarran International Airport",
        "CITY": "Las Vegas",
        "STATE": "NV",
        "COUNTRY": "USA",
        "LATITUDE": 36.08036,
        "LONGITUDE": -115.15233
      },
      {
        "IATA_CODE": "LAW",
        "AIRPORT": "Lawton-Fort Sill Regional Airport",
        "CITY": "Lawton",
        "STATE": "OK",
        "COUNTRY": "USA",
        "LATITUDE": 34.56771,
        "LONGITUDE": -98.41664
      },
      {
        "IATA_CODE": "LAX",
        "AIRPORT": "Los Angeles International Airport",
        "CITY": "Los Angeles",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 33.94254,
        "LONGITUDE": -118.40807
      },
      {
        "IATA_CODE": "LBB",
        "AIRPORT": "Lubbock Preston Smith International Airport",
        "CITY": "Lubbock",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 33.66364,
        "LONGITUDE": -101.82278
      },
      {
        "IATA_CODE": "LBE",
        "AIRPORT": "Arnold Palmer Regional Airport",
        "CITY": "Latrobe",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 40.27594,
        "LONGITUDE": -79.4048
      },
      {
        "IATA_CODE": "LCH",
        "AIRPORT": "Lake Charles Regional Airport",
        "CITY": "Lake Charles",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 30.1261,
        "LONGITUDE": -93.2234
      },
      {
        "IATA_CODE": "LEX",
        "AIRPORT": "Blue Grass Airport",
        "CITY": "Lexington",
        "STATE": "KY",
        "COUNTRY": "USA",
        "LATITUDE": 38.03697,
        "LONGITUDE": -84.60539
      },
      {
        "IATA_CODE": "LFT",
        "AIRPORT": "Lafayette Regional Airport",
        "CITY": "Lafayette",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 30.20528,
        "LONGITUDE": -91.98766
      },
      {
        "IATA_CODE": "LGA",
        "AIRPORT": "LaGuardia Airport (Marine Air Terminal)",
        "CITY": "New York",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 40.77724,
        "LONGITUDE": -73.87261
      },
      {
        "IATA_CODE": "LGB",
        "AIRPORT": "Long Beach AirportÂ (Daugherty Field)",
        "CITY": "Long Beach",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 33.81772,
        "LONGITUDE": -118.15161
      },
      {
        "IATA_CODE": "LIH",
        "AIRPORT": "Lihue Airport",
        "CITY": "Lihue",
        "STATE": "HI",
        "COUNTRY": "USA",
        "LATITUDE": 21.97598,
        "LONGITUDE": -159.33896
      },
      {
        "IATA_CODE": "LIT",
        "AIRPORT": "Bill and Hillary Clinton National AirportÂ (Adams Field)",
        "CITY": "Little Rock",
        "STATE": "AR",
        "COUNTRY": "USA",
        "LATITUDE": 34.7294,
        "LONGITUDE": -92.22425
      },
      {
        "IATA_CODE": "LNK",
        "AIRPORT": "Lincoln AirportÂ (Lincoln Municipal)",
        "CITY": "Lincoln",
        "STATE": "NE",
        "COUNTRY": "USA",
        "LATITUDE": 40.85097,
        "LONGITUDE": -96.75925
      },
      {
        "IATA_CODE": "LRD",
        "AIRPORT": "Laredo International Airport",
        "CITY": "Laredo",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 27.54374,
        "LONGITUDE": -99.46154
      },
      {
        "IATA_CODE": "LSE",
        "AIRPORT": "La Crosse Regional Airport",
        "CITY": "La Crosse",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 43.87938,
        "LONGITUDE": -91.25654
      },
      {
        "IATA_CODE": "LWS",
        "AIRPORT": "Lewiston-Nez Perce County Airport",
        "CITY": "Lewiston",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 46.3745,
        "LONGITUDE": -117.01539
      },
      {
        "IATA_CODE": "MAF",
        "AIRPORT": "Midland International Airport",
        "CITY": "Midland",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 31.94253,
        "LONGITUDE": -102.20191
      },
      {
        "IATA_CODE": "MBS",
        "AIRPORT": "MBS International Airport",
        "CITY": "Saginaw",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 43.53291,
        "LONGITUDE": -84.07965
      },
      {
        "IATA_CODE": "MCI",
        "AIRPORT": "Kansas City International Airport",
        "CITY": "Kansas City",
        "STATE": "MO",
        "COUNTRY": "USA",
        "LATITUDE": 39.29761,
        "LONGITUDE": -94.71391
      },
      {
        "IATA_CODE": "MCO",
        "AIRPORT": "Orlando International Airport",
        "CITY": "Orlando",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 28.42889,
        "LONGITUDE": -81.31603
      },
      {
        "IATA_CODE": "MDT",
        "AIRPORT": "Harrisburg International Airport",
        "CITY": "Harrisburg",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 40.1935,
        "LONGITUDE": -76.7634
      },
      {
        "IATA_CODE": "MDW",
        "AIRPORT": "Chicago Midway International Airport",
        "CITY": "Chicago",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 41.78598,
        "LONGITUDE": -87.75242
      },
      {
        "IATA_CODE": "MEI",
        "AIRPORT": "Meridian Regional Airport",
        "CITY": "Meridian",
        "STATE": "MS",
        "COUNTRY": "USA",
        "LATITUDE": 32.33313,
        "LONGITUDE": -88.75121
      },
      {
        "IATA_CODE": "MEM",
        "AIRPORT": "Memphis International Airport",
        "CITY": "Memphis",
        "STATE": "TN",
        "COUNTRY": "USA",
        "LATITUDE": 35.04242,
        "LONGITUDE": -89.97667
      },
      {
        "IATA_CODE": "MFE",
        "AIRPORT": "McAllen-Miller International AirportÂ (McAllen Miller International)",
        "CITY": "McAllen",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 26.17583,
        "LONGITUDE": -98.23861
      },
      {
        "IATA_CODE": "MFR",
        "AIRPORT": "Rogue Valley International Airport",
        "CITY": "Medford",
        "STATE": "OR",
        "COUNTRY": "USA",
        "LATITUDE": 42.37423,
        "LONGITUDE": -122.8735
      },
      {
        "IATA_CODE": "MGM",
        "AIRPORT": "Montgomery Regional Airport",
        "CITY": "Montgomery",
        "STATE": "AL",
        "COUNTRY": "USA",
        "LATITUDE": 32.30064,
        "LONGITUDE": -86.39398
      },
      {
        "IATA_CODE": "MHK",
        "AIRPORT": "Manhattan Regional Airport",
        "CITY": "Manhattan",
        "STATE": "KS",
        "COUNTRY": "USA",
        "LATITUDE": 39.14097,
        "LONGITUDE": -96.67083
      },
      {
        "IATA_CODE": "MHT",
        "AIRPORT": "Manchester-Boston Regional Airport",
        "CITY": "Manchester",
        "STATE": "NH",
        "COUNTRY": "USA",
        "LATITUDE": 42.93452,
        "LONGITUDE": -71.43706
      },
      {
        "IATA_CODE": "MIA",
        "AIRPORT": "Miami International Airport",
        "CITY": "Miami",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 25.79325,
        "LONGITUDE": -80.29056
      },
      {
        "IATA_CODE": "MKE",
        "AIRPORT": "General Mitchell International Airport",
        "CITY": "Milwaukee",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 42.94722,
        "LONGITUDE": -87.89658
      },
      {
        "IATA_CODE": "MKG",
        "AIRPORT": "Muskegon County Airport",
        "CITY": "Muskegon",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 43.16949,
        "LONGITUDE": -86.23822
      },
      {
        "IATA_CODE": "MLB",
        "AIRPORT": "Melbourne International Airport",
        "CITY": "Melbourne",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 28.10275,
        "LONGITUDE": -80.64581
      },
      {
        "IATA_CODE": "MLI",
        "AIRPORT": "Quad City International Airport",
        "CITY": "Moline",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 41.44853,
        "LONGITUDE": -90.50754
      },
      {
        "IATA_CODE": "MLU",
        "AIRPORT": "Monroe Regional Airport",
        "CITY": "Monroe",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 32.51087,
        "LONGITUDE": -92.03769
      },
      {
        "IATA_CODE": "MMH",
        "AIRPORT": "Mammoth Yosemite Airport",
        "CITY": "Mammoth Lakes",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 37.62405,
        "LONGITUDE": -118.83777
      },
      {
        "IATA_CODE": "MOB",
        "AIRPORT": "Mobile Regional Airport",
        "CITY": "Mobile",
        "STATE": "AL",
        "COUNTRY": "USA",
        "LATITUDE": 30.69142,
        "LONGITUDE": -88.24283
      },
      {
        "IATA_CODE": "MOT",
        "AIRPORT": "Minot International Airport",
        "CITY": "Minot",
        "STATE": "ND",
        "COUNTRY": "USA",
        "LATITUDE": 48.25938,
        "LONGITUDE": -101.28033
      },
      {
        "IATA_CODE": "MQT",
        "AIRPORT": "Sawyer International Airport",
        "CITY": "Marquette",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 46.35364,
        "LONGITUDE": -87.39536
      },
      {
        "IATA_CODE": "MRY",
        "AIRPORT": "Monterey Regional AirportÂ (Monterey Peninsula Airport)",
        "CITY": "Monterey",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 36.58698,
        "LONGITUDE": -121.84295
      },
      {
        "IATA_CODE": "MSN",
        "AIRPORT": "Dane County Regional Airport",
        "CITY": "Madison",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 43.13986,
        "LONGITUDE": -89.33751
      },
      {
        "IATA_CODE": "MSO",
        "AIRPORT": "Missoula International Airport",
        "CITY": "Missoula",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 46.91631,
        "LONGITUDE": -114.09056
      },
      {
        "IATA_CODE": "MSP",
        "AIRPORT": "Minneapolis-Saint Paul International Airport",
        "CITY": "Minneapolis",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 44.88055,
        "LONGITUDE": -93.21692
      },
      {
        "IATA_CODE": "MSY",
        "AIRPORT": "Louis Armstrong New Orleans International Airport",
        "CITY": "New Orleans",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 29.99339,
        "LONGITUDE": -90.25803
      },
      {
        "IATA_CODE": "MTJ",
        "AIRPORT": "Montrose Regional Airport",
        "CITY": "Montrose",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 38.50887,
        "LONGITUDE": -107.89383
      },
      {
        "IATA_CODE": "MVY",
        "AIRPORT": "Martha's Vineyard Airport",
        "CITY": "Marthas Vineyard",
        "STATE": "MA",
        "COUNTRY": "USA",
        "LATITUDE": 41.39303,
        "LONGITUDE": -70.61433
      },
      {
        "IATA_CODE": "MYR",
        "AIRPORT": "Myrtle Beach International Airport",
        "CITY": "Myrtle Beach",
        "STATE": "SC",
        "COUNTRY": "USA",
        "LATITUDE": 33.67975,
        "LONGITUDE": -78.92833
      },
      {
        "IATA_CODE": "OAJ",
        "AIRPORT": "Albert J. Ellis Airport",
        "CITY": "Jacksonville",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 34.82916,
        "LONGITUDE": -77.61214
      },
      {
        "IATA_CODE": "OAK",
        "AIRPORT": "Oakland International Airport",
        "CITY": "Oakland",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 37.72129,
        "LONGITUDE": -122.22072
      },
      {
        "IATA_CODE": "OGG",
        "AIRPORT": "Kahului Airport",
        "CITY": "Kahului",
        "STATE": "HI",
        "COUNTRY": "USA",
        "LATITUDE": 20.89865,
        "LONGITUDE": -156.43046
      },
      {
        "IATA_CODE": "OKC",
        "AIRPORT": "Will Rogers World Airport",
        "CITY": "Oklahoma City",
        "STATE": "OK",
        "COUNTRY": "USA",
        "LATITUDE": 35.39309,
        "LONGITUDE": -97.60073
      },
      {
        "IATA_CODE": "OMA",
        "AIRPORT": "Eppley Airfield",
        "CITY": "Omaha",
        "STATE": "NE",
        "COUNTRY": "USA",
        "LATITUDE": 41.30252,
        "LONGITUDE": -95.89417
      },
      {
        "IATA_CODE": "OME",
        "AIRPORT": "Nome Airport",
        "CITY": "Nome",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 64.5122,
        "LONGITUDE": -165.44525
      },
      {
        "IATA_CODE": "ONT",
        "AIRPORT": "Ontario International Airport",
        "CITY": "Ontario",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 34.056,
        "LONGITUDE": -117.60119
      },
      {
        "IATA_CODE": "ORD",
        "AIRPORT": "Chicago O'Hare International Airport",
        "CITY": "Chicago",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 41.9796,
        "LONGITUDE": -87.90446
      },
      {
        "IATA_CODE": "ORF",
        "AIRPORT": "Norfolk International Airport",
        "CITY": "Norfolk",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 36.89461,
        "LONGITUDE": -76.20122
      },
      {
        "IATA_CODE": "ORH",
        "AIRPORT": "Worcester Regional Airport",
        "CITY": "Worcester",
        "STATE": "MA",
        "COUNTRY": "USA",
        "LATITUDE": 42.26734,
        "LONGITUDE": -71.87571
      },
      {
        "IATA_CODE": "OTH",
        "AIRPORT": "Southwest Oregon Regional AirportÂ (North Bend Municipal)",
        "CITY": "North Bend",
        "STATE": "OR",
        "COUNTRY": "USA",
        "LATITUDE": 43.41714,
        "LONGITUDE": -124.24603
      },
      {
        "IATA_CODE": "OTZ",
        "AIRPORT": "Ralph Wien Memorial Airport",
        "CITY": "Kotzebue",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 66.88468,
        "LONGITUDE": -162.59855
      },
      {
        "IATA_CODE": "PAH",
        "AIRPORT": "Barkley Regional Airport",
        "CITY": "Paducah",
        "STATE": "KY",
        "COUNTRY": "USA",
        "LATITUDE": 37.06083,
        "LONGITUDE": -88.77375
      },
      {
        "IATA_CODE": "PBG",
        "AIRPORT": "Plattsburgh International Airport",
        "CITY": "Plattsburgh",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": "",
        "LONGITUDE": ""
      },
      {
        "IATA_CODE": "PBI",
        "AIRPORT": "Palm Beach International Airport",
        "CITY": "West Palm Beach",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 26.68316,
        "LONGITUDE": -80.09559
      },
      {
        "IATA_CODE": "PDX",
        "AIRPORT": "Portland International Airport",
        "CITY": "Portland",
        "STATE": "OR",
        "COUNTRY": "USA",
        "LATITUDE": 45.58872,
        "LONGITUDE": -122.5975
      },
      {
        "IATA_CODE": "PHF",
        "AIRPORT": "Newport News/Williamsburg International Airport",
        "CITY": "Newport News",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 37.1319,
        "LONGITUDE": -76.49299
      },
      {
        "IATA_CODE": "PHL",
        "AIRPORT": "Philadelphia International Airport",
        "CITY": "Philadelphia",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 39.87195,
        "LONGITUDE": -75.24114
      },
      {
        "IATA_CODE": "PHX",
        "AIRPORT": "Phoenix Sky Harbor International Airport",
        "CITY": "Phoenix",
        "STATE": "AZ",
        "COUNTRY": "USA",
        "LATITUDE": 33.43417,
        "LONGITUDE": -112.00806
      },
      {
        "IATA_CODE": "PIA",
        "AIRPORT": "General Wayne A. Downing Peoria International Airport",
        "CITY": "Peoria",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 40.66424,
        "LONGITUDE": -89.69331
      },
      {
        "IATA_CODE": "PIB",
        "AIRPORT": "Hattiesburg-Laurel Regional Airport",
        "CITY": "Hattiesburg-Laurel",
        "STATE": "MS",
        "COUNTRY": "USA",
        "LATITUDE": 31.46715,
        "LONGITUDE": -89.33706
      },
      {
        "IATA_CODE": "PIH",
        "AIRPORT": "Pocatello Regional Airport",
        "CITY": "Pocatello",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 42.91131,
        "LONGITUDE": -112.59586
      },
      {
        "IATA_CODE": "PIT",
        "AIRPORT": "Pittsburgh International Airport",
        "CITY": "Pittsburgh",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 40.49147,
        "LONGITUDE": -80.23287
      },
      {
        "IATA_CODE": "PLN",
        "AIRPORT": "Pellston Regional Airport of Emmet County",
        "CITY": "Pellston",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 45.57093,
        "LONGITUDE": -84.79672
      },
      {
        "IATA_CODE": "PNS",
        "AIRPORT": "Pensacola International AirportÂ (Pensacola Gulf Coast Regional Airport)",
        "CITY": "Pensacola",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 30.47331,
        "LONGITUDE": -87.18744
      },
      {
        "IATA_CODE": "PPG",
        "AIRPORT": "Pago Pago International Airport (Tafuna Airport)",
        "CITY": "Pago Pago",
        "STATE": "AS",
        "COUNTRY": "USA",
        "LATITUDE": 14.33102,
        "LONGITUDE": -170.71053
      },
      {
        "IATA_CODE": "PSC",
        "AIRPORT": "Tri-Cities Airport",
        "CITY": "Pasco",
        "STATE": "WA",
        "COUNTRY": "USA",
        "LATITUDE": 46.26468,
        "LONGITUDE": -119.11903
      },
      {
        "IATA_CODE": "PSE",
        "AIRPORT": "Mercedita Airport",
        "CITY": "Ponce",
        "STATE": "PR",
        "COUNTRY": "USA",
        "LATITUDE": 18.0083,
        "LONGITUDE": -66.56301
      },
      {
        "IATA_CODE": "PSG",
        "AIRPORT": "Petersburg James A. Johnson Airport",
        "CITY": "Petersburg",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 56.80165,
        "LONGITUDE": -132.94528
      },
      {
        "IATA_CODE": "PSP",
        "AIRPORT": "Palm Springs International Airport",
        "CITY": "Palm Springs",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 33.82922,
        "LONGITUDE": -116.50625
      },
      {
        "IATA_CODE": "PUB",
        "AIRPORT": "Pueblo Memorial Airport",
        "CITY": "Pueblo",
        "STATE": "CO",
        "COUNTRY": "USA",
        "LATITUDE": 38.28909,
        "LONGITUDE": -104.49657
      },
      {
        "IATA_CODE": "PVD",
        "AIRPORT": "Theodore Francis Green State Airport",
        "CITY": "Providence",
        "STATE": "RI",
        "COUNTRY": "USA",
        "LATITUDE": 41.724,
        "LONGITUDE": -71.42822
      },
      {
        "IATA_CODE": "PWM",
        "AIRPORT": "Portland International Jetport",
        "CITY": "Portland",
        "STATE": "ME",
        "COUNTRY": "USA",
        "LATITUDE": 43.64617,
        "LONGITUDE": -70.30875
      },
      {
        "IATA_CODE": "RAP",
        "AIRPORT": "Rapid City Regional Airport",
        "CITY": "Rapid City",
        "STATE": "SD",
        "COUNTRY": "USA",
        "LATITUDE": 44.04532,
        "LONGITUDE": -103.05737
      },
      {
        "IATA_CODE": "RDD",
        "AIRPORT": "Redding Municipal Airport",
        "CITY": "Redding",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 40.50898,
        "LONGITUDE": -122.2934
      },
      {
        "IATA_CODE": "RDM",
        "AIRPORT": "Redmond Municipal AirportÂ (Roberts Field)",
        "CITY": "Redmond",
        "STATE": "OR",
        "COUNTRY": "USA",
        "LATITUDE": 44.25407,
        "LONGITUDE": -121.14996
      },
      {
        "IATA_CODE": "RDU",
        "AIRPORT": "Raleigh-Durham International Airport",
        "CITY": "Raleigh",
        "STATE": "NC",
        "COUNTRY": "USA",
        "LATITUDE": 35.87764,
        "LONGITUDE": -78.78747
      },
      {
        "IATA_CODE": "RHI",
        "AIRPORT": "Rhinelander-Oneida County Airport",
        "CITY": "Rhinelander",
        "STATE": "WI",
        "COUNTRY": "USA",
        "LATITUDE": 45.63119,
        "LONGITUDE": -89.46745
      },
      {
        "IATA_CODE": "RIC",
        "AIRPORT": "Richmond International Airport",
        "CITY": "Richmond",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 37.50517,
        "LONGITUDE": -77.31967
      },
      {
        "IATA_CODE": "RKS",
        "AIRPORT": "Rock Springs-Sweetwater County Airport",
        "CITY": "Rock Springs",
        "STATE": "WY",
        "COUNTRY": "USA",
        "LATITUDE": 41.59422,
        "LONGITUDE": -109.06519
      },
      {
        "IATA_CODE": "RNO",
        "AIRPORT": "Reno/Tahoe International Airport",
        "CITY": "Reno",
        "STATE": "NV",
        "COUNTRY": "USA",
        "LATITUDE": 39.49858,
        "LONGITUDE": -119.76806
      },
      {
        "IATA_CODE": "ROA",
        "AIRPORT": "Roanoke Regional AirportÂ (Woodrum Field)",
        "CITY": "Roanoke",
        "STATE": "VA",
        "COUNTRY": "USA",
        "LATITUDE": 37.32547,
        "LONGITUDE": -79.97543
      },
      {
        "IATA_CODE": "ROC",
        "AIRPORT": "Greater Rochester International Airport",
        "CITY": "Rochester",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 43.11887,
        "LONGITUDE": -77.67238
      },
      {
        "IATA_CODE": "ROW",
        "AIRPORT": "Roswell International Air Center",
        "CITY": "Roswell",
        "STATE": "NM",
        "COUNTRY": "USA",
        "LATITUDE": 33.30156,
        "LONGITUDE": -104.53056
      },
      {
        "IATA_CODE": "RST",
        "AIRPORT": "Rochester International Airport",
        "CITY": "Rochester",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 43.90883,
        "LONGITUDE": -92.49799
      },
      {
        "IATA_CODE": "RSW",
        "AIRPORT": "Southwest Florida International Airport",
        "CITY": "Ft. Myers",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 26.53617,
        "LONGITUDE": -81.75517
      },
      {
        "IATA_CODE": "SAF",
        "AIRPORT": "Santa Fe Municipal Airport",
        "CITY": "Santa Fe",
        "STATE": "NM",
        "COUNTRY": "USA",
        "LATITUDE": 35.61678,
        "LONGITUDE": -106.08814
      },
      {
        "IATA_CODE": "SAN",
        "AIRPORT": "San Diego International AirportÂ (Lindbergh Field)",
        "CITY": "San Diego",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 32.73356,
        "LONGITUDE": -117.18966
      },
      {
        "IATA_CODE": "SAT",
        "AIRPORT": "San Antonio International Airport",
        "CITY": "San Antonio",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 29.53369,
        "LONGITUDE": -98.46978
      },
      {
        "IATA_CODE": "SAV",
        "AIRPORT": "Savannah/Hilton Head International Airport",
        "CITY": "Savannah",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 32.12758,
        "LONGITUDE": -81.20214
      },
      {
        "IATA_CODE": "SBA",
        "AIRPORT": "Santa Barbara Municipal AirportÂ (Santa Barbara Airport)",
        "CITY": "Santa Barbara",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 34.42621,
        "LONGITUDE": -119.84037
      },
      {
        "IATA_CODE": "SBN",
        "AIRPORT": "South Bend International AirportÂ (South Bend Regional)",
        "CITY": "South Bend",
        "STATE": "IN",
        "COUNTRY": "USA",
        "LATITUDE": 41.70895,
        "LONGITUDE": -86.31847
      },
      {
        "IATA_CODE": "SBP",
        "AIRPORT": "San Luis Obispo County Regional AirportÂ (McChesney Field)",
        "CITY": "San Luis Obispo",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 35.23706,
        "LONGITUDE": -120.64239
      },
      {
        "IATA_CODE": "SCC",
        "AIRPORT": "Deadhorse AirportÂ (Prudhoe Bay Airport)",
        "CITY": "Deadhorse",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 70.19476,
        "LONGITUDE": -148.46516
      },
      {
        "IATA_CODE": "SCE",
        "AIRPORT": "University Park Airport",
        "CITY": "State College",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": 40.85121,
        "LONGITUDE": -77.8463
      },
      {
        "IATA_CODE": "SDF",
        "AIRPORT": "Louisville International AirportÂ (Standiford Field)",
        "CITY": "Louisville",
        "STATE": "KY",
        "COUNTRY": "USA",
        "LATITUDE": 38.17439,
        "LONGITUDE": -85.736
      },
      {
        "IATA_CODE": "SEA",
        "AIRPORT": "Seattle-Tacoma International Airport",
        "CITY": "Seattle",
        "STATE": "WA",
        "COUNTRY": "USA",
        "LATITUDE": 47.44898,
        "LONGITUDE": -122.30931
      },
      {
        "IATA_CODE": "SFO",
        "AIRPORT": "San Francisco International Airport",
        "CITY": "San Francisco",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 37.619,
        "LONGITUDE": -122.37484
      },
      {
        "IATA_CODE": "SGF",
        "AIRPORT": "Springfield-Branson National Airport",
        "CITY": "Springfield",
        "STATE": "MO",
        "COUNTRY": "USA",
        "LATITUDE": 37.24433,
        "LONGITUDE": -93.38686
      },
      {
        "IATA_CODE": "SGU",
        "AIRPORT": "St. George Regional Airport",
        "CITY": "St George",
        "STATE": "UT",
        "COUNTRY": "USA",
        "LATITUDE": 37.09058,
        "LONGITUDE": -113.59306
      },
      {
        "IATA_CODE": "SHV",
        "AIRPORT": "Shreveport Regional Airport",
        "CITY": "Shreveport",
        "STATE": "LA",
        "COUNTRY": "USA",
        "LATITUDE": 32.44663,
        "LONGITUDE": -93.8256
      },
      {
        "IATA_CODE": "SIT",
        "AIRPORT": "Sitka Rocky Gutierrez Airport",
        "CITY": "Sitka",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 57.04714,
        "LONGITUDE": -135.3616
      },
      {
        "IATA_CODE": "SJC",
        "AIRPORT": "Norman Y. Mineta San JosÃ© International Airport",
        "CITY": "San Jose",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 37.36186,
        "LONGITUDE": -121.92901
      },
      {
        "IATA_CODE": "SJT",
        "AIRPORT": "San Angelo Regional AirportÂ (Mathis Field)",
        "CITY": "San Angelo",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 31.35775,
        "LONGITUDE": -100.49631
      },
      {
        "IATA_CODE": "SJU",
        "AIRPORT": "Luis MuÃ±oz MarÃ­n International Airport",
        "CITY": "San Juan",
        "STATE": "PR",
        "COUNTRY": "USA",
        "LATITUDE": 18.43942,
        "LONGITUDE": -66.00183
      },
      {
        "IATA_CODE": "SLC",
        "AIRPORT": "Salt Lake City International Airport",
        "CITY": "Salt Lake City",
        "STATE": "UT",
        "COUNTRY": "USA",
        "LATITUDE": 40.78839,
        "LONGITUDE": -111.97777
      },
      {
        "IATA_CODE": "SMF",
        "AIRPORT": "Sacramento International Airport",
        "CITY": "Sacramento",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 38.69542,
        "LONGITUDE": -121.59077
      },
      {
        "IATA_CODE": "SMX",
        "AIRPORT": "Santa Maria Public AirportÂ (Capt G. Allan Hancock Field)",
        "CITY": "Santa Maria",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 34.89925,
        "LONGITUDE": -120.45758
      },
      {
        "IATA_CODE": "SNA",
        "AIRPORT": "John Wayne AirportÂ (Orange County Airport)",
        "CITY": "Santa Ana",
        "STATE": "CA",
        "COUNTRY": "USA",
        "LATITUDE": 33.67566,
        "LONGITUDE": -117.86822
      },
      {
        "IATA_CODE": "SPI",
        "AIRPORT": "Abraham Lincoln Capital Airport",
        "CITY": "Springfield",
        "STATE": "IL",
        "COUNTRY": "USA",
        "LATITUDE": 39.84395,
        "LONGITUDE": -89.67762
      },
      {
        "IATA_CODE": "SPS",
        "AIRPORT": "Wichita Falls Municipal Airport/Sheppard AFB",
        "CITY": "Wichita Falls",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 33.9888,
        "LONGITUDE": -98.49189
      },
      {
        "IATA_CODE": "SRQ",
        "AIRPORT": "Sarasota-Bradenton International Airport",
        "CITY": "Sarasota",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 27.39533,
        "LONGITUDE": -82.55411
      },
      {
        "IATA_CODE": "STC",
        "AIRPORT": "St. Cloud Regional Airport",
        "CITY": "St Cloud",
        "STATE": "MN",
        "COUNTRY": "USA",
        "LATITUDE": 45.54532,
        "LONGITUDE": -94.05834
      },
      {
        "IATA_CODE": "STL",
        "AIRPORT": "St. Louis International Airport at Lambert Field",
        "CITY": "St Louis",
        "STATE": "MO",
        "COUNTRY": "USA",
        "LATITUDE": 38.74769,
        "LONGITUDE": -90.35999
      },
      {
        "IATA_CODE": "STT",
        "AIRPORT": "Cyril E. King Airport",
        "CITY": "Charlotte Amalie",
        "STATE": "VI",
        "COUNTRY": "USA",
        "LATITUDE": 18.33731,
        "LONGITUDE": -64.97336
      },
      {
        "IATA_CODE": "STX",
        "AIRPORT": "Henry E. Rohlsen Airport",
        "CITY": "Christiansted",
        "STATE": "VI",
        "COUNTRY": "USA",
        "LATITUDE": 17.70189,
        "LONGITUDE": -64.79856
      },
      {
        "IATA_CODE": "SUN",
        "AIRPORT": "Friedman Memorial Airport",
        "CITY": "Hailey",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 43.50484,
        "LONGITUDE": -114.29659
      },
      {
        "IATA_CODE": "SUX",
        "AIRPORT": "Sioux Gateway Airport",
        "CITY": "Sioux City",
        "STATE": "IA",
        "COUNTRY": "USA",
        "LATITUDE": 42.4026,
        "LONGITUDE": -96.38437
      },
      {
        "IATA_CODE": "SWF",
        "AIRPORT": "Stewart International Airport",
        "CITY": "Newburgh",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 41.50409,
        "LONGITUDE": -74.10484
      },
      {
        "IATA_CODE": "SYR",
        "AIRPORT": "Syracuse Hancock International Airport",
        "CITY": "Syracuse",
        "STATE": "NY",
        "COUNTRY": "USA",
        "LATITUDE": 43.11119,
        "LONGITUDE": -76.10631
      },
      {
        "IATA_CODE": "TLH",
        "AIRPORT": "Tallahassee International Airport",
        "CITY": "Tallahassee",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 30.39653,
        "LONGITUDE": -84.35033
      },
      {
        "IATA_CODE": "TOL",
        "AIRPORT": "Toledo Express Airport",
        "CITY": "Toledo",
        "STATE": "OH",
        "COUNTRY": "USA",
        "LATITUDE": 41.58681,
        "LONGITUDE": -83.80783
      },
      {
        "IATA_CODE": "TPA",
        "AIRPORT": "Tampa International Airport",
        "CITY": "Tampa",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 27.97547,
        "LONGITUDE": -82.53325
      },
      {
        "IATA_CODE": "TRI",
        "AIRPORT": "Tri-Cities Regional Airport",
        "CITY": "Bristol",
        "STATE": "TN",
        "COUNTRY": "USA",
        "LATITUDE": 36.47521,
        "LONGITUDE": -82.40742
      },
      {
        "IATA_CODE": "TTN",
        "AIRPORT": "Trenton Mercer Airport",
        "CITY": "Trenton",
        "STATE": "NJ",
        "COUNTRY": "USA",
        "LATITUDE": 40.27669,
        "LONGITUDE": -74.81347
      },
      {
        "IATA_CODE": "TUL",
        "AIRPORT": "Tulsa International Airport",
        "CITY": "Tulsa",
        "STATE": "OK",
        "COUNTRY": "USA",
        "LATITUDE": 36.19837,
        "LONGITUDE": -95.88824
      },
      {
        "IATA_CODE": "TUS",
        "AIRPORT": "Tucson International Airport",
        "CITY": "Tucson",
        "STATE": "AZ",
        "COUNTRY": "USA",
        "LATITUDE": 32.11608,
        "LONGITUDE": -110.94103
      },
      {
        "IATA_CODE": "TVC",
        "AIRPORT": "Cherry Capital Airport",
        "CITY": "Traverse City",
        "STATE": "MI",
        "COUNTRY": "USA",
        "LATITUDE": 44.74144,
        "LONGITUDE": -85.58224
      },
      {
        "IATA_CODE": "TWF",
        "AIRPORT": "Magic Valley Regional AirportÂ (Joslin Field)",
        "CITY": "Twin Falls",
        "STATE": "ID",
        "COUNTRY": "USA",
        "LATITUDE": 42.4818,
        "LONGITUDE": -114.48774
      },
      {
        "IATA_CODE": "TXK",
        "AIRPORT": "Texarkana Regional AirportÂ (Webb Field)",
        "CITY": "Texarkana",
        "STATE": "AR",
        "COUNTRY": "USA",
        "LATITUDE": 33.45371,
        "LONGITUDE": -93.99102
      },
      {
        "IATA_CODE": "TYR",
        "AIRPORT": "Tyler Pounds Regional Airport",
        "CITY": "Tyler",
        "STATE": "TX",
        "COUNTRY": "USA",
        "LATITUDE": 32.35414,
        "LONGITUDE": -95.40239
      },
      {
        "IATA_CODE": "TYS",
        "AIRPORT": "McGhee Tyson Airport",
        "CITY": "Knoxville",
        "STATE": "TN",
        "COUNTRY": "USA",
        "LATITUDE": 35.81249,
        "LONGITUDE": -83.99286
      },
      {
        "IATA_CODE": "UST",
        "AIRPORT": "Northeast Florida Regional AirportÂ (St. Augustine Airport)",
        "CITY": "St. Augustine",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": "",
        "LONGITUDE": ""
      },
      {
        "IATA_CODE": "VEL",
        "AIRPORT": "Valdez Airport",
        "CITY": "Vernal",
        "STATE": "UT",
        "COUNTRY": "USA",
        "LATITUDE": 40.4409,
        "LONGITUDE": -109.50992
      },
      {
        "IATA_CODE": "VLD",
        "AIRPORT": "Valdosta Regional Airport",
        "CITY": "Valdosta",
        "STATE": "GA",
        "COUNTRY": "USA",
        "LATITUDE": 30.7825,
        "LONGITUDE": -83.27672
      },
      {
        "IATA_CODE": "VPS",
        "AIRPORT": "Destin-Fort Walton Beach Airport/Eglin AFB",
        "CITY": "Valparaiso",
        "STATE": "FL",
        "COUNTRY": "USA",
        "LATITUDE": 30.48325,
        "LONGITUDE": -86.5254
      },
      {
        "IATA_CODE": "WRG",
        "AIRPORT": "Wrangell Airport",
        "CITY": "Wrangell",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 56.48433,
        "LONGITUDE": -132.36982
      },
      {
        "IATA_CODE": "WYS",
        "AIRPORT": "Westerly State Airport",
        "CITY": "West Yellowstone",
        "STATE": "MT",
        "COUNTRY": "USA",
        "LATITUDE": 44.6884,
        "LONGITUDE": -111.11764
      },
      {
        "IATA_CODE": "XNA",
        "AIRPORT": "Northwest Arkansas Regional Airport",
        "CITY": "Fayetteville/Springdale/Rogers",
        "STATE": "AR",
        "COUNTRY": "USA",
        "LATITUDE": 36.28187,
        "LONGITUDE": -94.30681
      },
      {
        "IATA_CODE": "YAK",
        "AIRPORT": "Yakutat Airport",
        "CITY": "Yakutat",
        "STATE": "AK",
        "COUNTRY": "USA",
        "LATITUDE": 59.50336,
        "LONGITUDE": -139.66023
      },
      {
        "IATA_CODE": "YUM",
        "AIRPORT": "Yuma International Airport",
        "CITY": "Yuma",
        "STATE": "AZ",
        "COUNTRY": "USA",
        "LATITUDE": 32.65658,
        "LONGITUDE": -114.60597
      }
    ]
  
  }
  