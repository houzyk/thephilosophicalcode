import PEOPLEDATA from "../../../content/people.json";

export const GET = () => new Response(JSON.stringify(PEOPLEDATA));
