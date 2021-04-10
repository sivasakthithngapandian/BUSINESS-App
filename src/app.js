db.collection('booking').get().then((snapshot)=>{
    console.log(snapshot.docs)
})