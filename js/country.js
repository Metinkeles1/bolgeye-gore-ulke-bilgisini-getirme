async function listCountry() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    displayCountry(data[0])
}

listCountry();

displayCountry = (allCountries) => {
    console.log(allCountries.name.common)
    let html = `
    <img src="${allCountries.flags.png}" id="countryImg" class="img-fluid">
        <div class="card card-country-body">
            <div id="countryTitle" class="card-title card-country-header">
                <h3 class="my-2">${allCountries.name.common}</h3>
            </div>
            <div id="countyrText" class="card-text card-country-text mx-2">
                <div>
                    <div class="d-inline">Başkent: </div>
                    <div class="d-inline">${allCountries.capital}</div>
                </div>   
                <div>
                    <div class="d-inline">Bölge: </div>
                    <div class="d-inline">${allCountries.region}</div>
                </div>
                <div>
                    <div class="d-inline">Popülasyon: </div>
                    <div class="d-inline">${allCountries.population}</div>
                </div>
                <div>
                    <div class="d-inline">Para Birimi: </div>
                    <div class="d-inline">${Object.values(allCountries.currencies)[0].name} (${Object.values(allCountries.currencies)[0].symbol})</div>
                </div>
        </div>
    `;

    document.querySelector('.card-country').innerHTML = html;
}