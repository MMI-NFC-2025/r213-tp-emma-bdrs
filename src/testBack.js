import { allMaisons, oneID, allMaisonsFavori, allMaisonsSorted, bySurface, surfaceORprice, getAgent } from './backend.mjs' ;

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

