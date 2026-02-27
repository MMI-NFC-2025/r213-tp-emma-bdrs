import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090') ;

async function getEvents() {
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

async function addEvent(data) {
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

async function getOffres() {
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

async function filterByPrix(minPrix, maxPrix) {
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

async function addOffre(house) {
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

async function updateOffreFavori(id, favoris) {
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

async function oneID(id) {
  const record = await pb.collection('maisons').getOne(id) ;
  return record ;
}

async function getOffre(id) {
  try {
    return await oneID(id);
  } catch (error) {
    console.log('Une erreur est survenue en lisant la maison', error);
    return null;
  }
}

async function bySurface(surface) {
  const records = await pb.collection('maisons').getFullList({
    filter: `surface > ${surface}`
  }) ;
  return records ;
}

export { addEvent as a, addOffre as b, bySurface as c, getOffre as d, getOffres as e, filterByPrix as f, getEvents as g, updateOffreFavori as u };
