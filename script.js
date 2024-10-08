async function fetchData(){
    const url = "https://api.climatiq.io/data/v1/estimate";
    const api_key = "G81TRTNK4PMSZBQB87086QRPJH9N";

    const auth_headers = {
        "Authorization": "Bearer G81TRTNK4PMSZBQB87086QRPJH9N"
    }

    const params = {
            "emission_factor": {
            "activity_id": "passenger_flight-route_type_domestic-aircraft_type_na-distance_na-class_na-rf_excluded-distance_uplift_included",
            "source": "BEIS",
            "region": "GB",
            "year": 2021,
            "source_lca_activity": "fuel_combustion",
            "data_version": "15.15"
        },
        "parameters": {
            "passengers": 4,
            "distance": 100,
            "distance_unit": "km"
	    }
    }
    

    try{
        const response = await fetch(url, {
            method: "POST",
            headers: auth_headers,
            body: JSON.stringify(params)
        }
        );

        const data = await response.json();

        const {co2e, co2e_unit} = data;

        console.log(data);
        console.log(co2e);
        console.log(co2e_unit);
        document.querySelector(...).innerHTML = co2e;
  
        return data;
    }

    catch (error){
        console.log("uh oh");
    }
}

fetchData();