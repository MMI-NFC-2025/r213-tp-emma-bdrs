import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allMaisons() {
  const records = await pb.collection('maisons').getFullList() ;
  return records ;
}

export async function oneID(id) {
  const record = await pb.collection('maisons').getOne(id) ;
  return record ;
}

export async function getOffre(id) {
  try {
    return await oneID(id);
  } catch (error) {
    console.log('Une erreur est survenue en lisant la maison', error);
    return null;
  }
}

export async function allMaisonsFavori() {
  const records = await pb.collection('maisons').getFullList({
    filter: 'favoris = true'
  }) ;
  return records ;
}

export async function allMaisonsSorted() {
  const records = await pb.collection('maisons').getFullList({
    sort: '+prix'
  }) ;
  return records ;
}

export async function bySurface(surface) {
  const records = await pb.collection('maisons').getFullList({
    filter: `surface > ${surface}`
  }) ;
  return records ;
}

export async function surfaceORprice(surface, p) {
  const records = await pb.collection('maisons').getFullList({
    filter: `surface > ${surface} || prix < ${p}`
  }) ;
  return records ;
}

export async function getAgent(id) {
  const record = await pb.collection('agent').getOne(id) ;
  return record ;
}


export async function allMaisonsAgents() {
  const records = await pb.collection('maisons').getFullList({
    expand: 'agent'
  }) ;
  return records ;
}

export async function allMaisonsByAgentId(agentId) {
  const records = await pb.collection('maisons').getFullList({
    filter: `agent = "${agentId}"`
  }) ;
  return records ;
}

export async function allMaisonsByAgentName(agentName) {
  const records = await pb.collection('maisons').getFullList({
    expand: 'agent'
  }) ;
  return records.filter((record) => record.expand?.agent?.nom === agentName) ;
}

export async function allMaisonsSortedAgent() {
  const records = await pb.collection('maisons').getFullList({
    sort: 'agent'
  }) ;
  return records ;
}

export async function bySurfaceAgent(surface, agentId) {
  const records = await pb.collection('maisons').getFullList({
    filter: `surface > ${surface} && agent = "${agentId}"`
  }) ;
  return records ;
}

export async function maisonFavoriAgent(agentId) {
  const records = await pb.collection('maisons').getFullList({
    filter: `favoris = true && agent = "${agentId}"`
  }) ;
  return records ;
}



