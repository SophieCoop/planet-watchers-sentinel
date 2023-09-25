export const AUTH_ENCODING = "Basic c29waGllX2VsazpRd2VyMTIzNA=="; // Basic Authentication
const BASIC_URL = "https://scihub.copernicus.eu/dhus/"
const API_URL = "api/stub/products"
const FILTER_URL = "filter=(%20footprint:%22Intersects(POLYGON((35.64789929246882%2033.19066226065996,35.451922746492286%2031.280355929993064,34.96009686599555%2029.565991451836865,34.25016826613435%2031.293782341257568,34.58356630076689%2031.492985186412724,34.749598657088995%2032.1220473376229,34.970857123022235%2032.81621715047392,35.08997811379929%2033.13521960693426,35.64789929246882%2033.19066226065996,35.64789929246882%2033.19066226065996)))%22)%20AND%20(%20%20(platformname:Sentinel-2%20AND%20cloudcoverpercentage:[0%20TO%2030]))"

const queryParams = new URLSearchParams();
queryParams.append('offset', '0');
queryParams.append('limit', '25');
queryParams.append('sortedby', 'ingestiondate');
queryParams.append('order', 'desc');

export const ALL_FILTERED_PRODUCTS_URL = BASIC_URL + API_URL + '?' + FILTER_URL + "&" + queryParams.toString();


const ODATA_PRODUCT_URL = (productId) => `odata/v1/Products('${productId}')/`;
const QUICK_LOOK_URL = "Products('Quicklook')/$value";
export const images_api = (productId) => BASIC_URL + ODATA_PRODUCT_URL(productId) + QUICK_LOOK_URL;

