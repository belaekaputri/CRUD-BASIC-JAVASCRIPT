let data=["I Want Die But I Want To Eat Tteokbokki","Filosofi Teras","Mindset"]; //data array default
function view(){
    let tabel=document.getElementById("tabel");
    tabel.innerHTML="<tr> <th>No</th> <th>Judul Buku</th> <th>Aksi</th> </tr>";
    for(let i=0; i<data.length;i++){
        let edit="<button class ='btn btn-outline-dark' href='#' onclick='edit(" + i + ")'>Edit</button>"
        let hapus="<button class ='btn btn-outline-dark' href='#' onclick='hapus(" + i + ")'>Hapus</button>"
       j=i+1;
       tabel.innerHTML +=`<tr> <td>${j}</td> <td>${data[i]}</td> <td>${edit} ${hapus}</td>`; 
    }
}
//save
const simpan=document.getElementById("simpan");
simpan.addEventListener("click",function(){
    let input=document.getElementById("entry");
    data.push(input.value);
    input.value="";
    view();  
});


//hapus
function hapus(id){
    data.splice(id,1);
    view();
}


//edit
function edit(id){
    let dt=prompt("Edit Nama Buku",data[id]);
    data[id]=dt;
    view();
}
view();