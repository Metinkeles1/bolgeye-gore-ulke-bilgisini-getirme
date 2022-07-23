async function listCountry() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe');
    const data = await response.json();
    displayCountry(data);
}

listCountry();

function displayCountry(allCountries) {
    console.log(allCountries)
    let html = "";
    for (let country of allCountries) {
        console.log(country)
        html += `
        <div class="card-country col-2 my-2">
                <img src="${country.flags.png}" id="countryImg" class="img-fluid">
                <div class="card card-country-body">
                    <div id="countryTitle" class="card-title card-country-header">
                        <h3 class="my-2">${country.name.common}</h3>
                    </div>
                    <div id="countyrText" class="card-text card-country-text mx-2">
                        <div class="my-2">
                            <div class="d-inline">Başkent: </div>
                            <div class="d-inline">${country.capital}</div>
                        </div>
                        <div class="my-2">
                            <div class="d-inline">Bölge: </div>
                            <div class="d-inline">${country.region}</div>
                        </div>
                        <div class="my-2">
                            <div class="d-inline">Popülasyon: </div>
                            <div class="d-inline">${(country.population / 1000000).toFixed(1)} milyon</div>
                        </div>
                        <div class="my-2">
                            <div class="d-inline">Para Birimi: </div>
                            <div class="d-inline">${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</div>
                        </div>
                    </div>
                </div>
        </div>
        `;
    }
    document.querySelector('#countriesAll').innerHTML = html;
}