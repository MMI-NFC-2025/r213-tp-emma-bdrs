import {
  allMaisons,
  oneID,
  allMaisonsFavori,
  allMaisonsSorted,
  bySurface,
  surfaceORprice,
  getAgent,
  allMaisonsAgents,
  allMaisonsByAgentId,
  allMaisonsByAgentName,
  allMaisonsSortedAgent,
  bySurfaceAgent,
  maisonFavoriAgent
} from './backend.mjs' ;

// Test allMaisons
console.log("=== TEST allMaisons ===") ;
try {
  const records = await allMaisons() ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test oneID
console.log("\n=== TEST oneID ===") ;
try {
  const record = await oneID('maison 1') ; 
  console.log(JSON.stringify(record, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test allMaisonsFavori
console.log("\n=== TEST allMaisonsFavori ===") ;
try {
  const records = await allMaisonsFavori() ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test allMaisonsSorted
console.log("\n=== TEST allMaisonsSorted ===") ;
try {
  const records = await allMaisonsSorted() ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test bySurface
console.log("\n=== TEST bySurface ===") ;
try {
  const records = await bySurface(100) ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test surfaceORprice
console.log("\n=== TEST surfaceORprice ===") ;
try {
  const records = await surfaceORprice(100, 300000) ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test getAgent
console.log("\n=== TEST getAgent ===") ;
try {
  const record = await getAgent('leroy') ;
  console.log(JSON.stringify(record, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Ajoutes aujourd'hui
// Test allMaisonsAgents
console.log("\n=== TEST allMaisonsAgents ===") ;
try {
  const records = await allMaisonsAgents() ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test allMaisonsByAgentId
console.log("\n=== TEST allMaisonsByAgentId ===") ;
try {
  const records = await allMaisonsByAgentId('leroy') ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test allMaisonsByAgentName
console.log("\n=== TEST allMaisonsByAgentName ===") ;
try {
  const records = await allMaisonsByAgentName('Leroy') ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test allMaisonsSortedAgent
console.log("\n=== TEST allMaisonsSortedAgent ===") ;
try {
  const records = await allMaisonsSortedAgent() ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test bySurfaceAgent
console.log("\n=== TEST bySurfaceAgent ===") ;
try {
  const records = await bySurfaceAgent(100, 'leroy') ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

// Test maisonFavoriAgent
console.log("\n=== TEST maisonFavoriAgent ===") ;
try {
  const records = await maisonFavoriAgent('leroy') ;
  console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
  console.error(e) ;
}

