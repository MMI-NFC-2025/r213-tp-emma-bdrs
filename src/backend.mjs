import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function getEvents() {
  try {
    const events = await pb.collection('events').getFullList({
      sort: '+date'
    }) ;
    return events ;
  } catch (error) {
    console.log('Une erreur est survenue en lisant la liste des événements', error) ;
    return [] ;
  }
}

export async function addEvent(data) {
  try {
    await pb.collection('events').create(data) ;
    return {
      success: true,
      message: "L'événement a été ajouté avec succès."
    } ;
  } catch (error) {
    return {
      success: false,
      message: "Une erreur est survenue lors de l'ajout de l'événement : " + error
    } ;
  }
}

export async function getOffres() {
  try {
    const records = await pb.collection('maisons').getFullList({
      sort: '-created'
    }) ;
    return records ;
  } catch (error) {
    console.log('Une erreur est survenue en lisant la liste des maisons', error) ;
    return [] ;
  }
}

export async function filterByPrix(minPrix, maxPrix) {
  try {
    const records = await pb.collection('maisons').getFullList({
      filter: `prix >= ${minPrix} && prix <= ${maxPrix}`,
      sort: '+prix'
    }) ;
    return records ;
  } catch (error) {
    console.log('Une erreur est survenue en filtrant les maisons par prix', error) ;
    return [] ;
  }
}

export async function addOffre(house) {
  try {
    await pb.collection('maisons').create(house) ;
    return {
      success: true,
      message: 'Offre ajoutée avec succès'
    } ;
  } catch (error) {
    console.log('Une erreur est survenue en ajoutant la maison', error) ;
    return {
      success: false,
      message: 'Une erreur est survenue en ajoutant la maison'
    } ;
  }
}

export async function updateOffreFavori(id, favoris) {
  try {
    await pb.collection('maisons').update(id, { favoris }) ;
    return {
      success: true,
      message: favoris ? 'Maison ajoutée aux favoris' : 'Maison retirée des favoris'
    } ;
  } catch (error) {
    console.log('Une erreur est survenue en mettant à jour le favori', error) ;
    return {
      success: false,
      message: 'Une erreur est survenue en mettant à jour le favori'
    } ;
  }
}

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

export async function getAgents() {
  try {
    const records = await pb.collection('agent').getFullList({
      sort: '+nom'
    }) ;
    return records ;
  } catch (error) {
    console.log('Une erreur est survenue en lisant la liste des agents', error) ;
    return [] ;
  }
}

export async function setFavori(house) {
  await pb.collection('maisons').update(house.id, { favoris: !house.favoris }) ;
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



