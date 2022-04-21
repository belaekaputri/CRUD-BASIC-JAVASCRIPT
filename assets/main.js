let data=[]; // variabel data untuk menyimpan (array)
function view(){
    let tabel=document.getElementById("tabel");
    tabel.innerHTML="<tr> <th>No</th> <th>Judul Buku</th> <th>Aksi</th> </tr>";//menampilkan judul tabel
    for(let i=0; i<data.length;i++){
        let edit="<button class ='btn btn-outline-dark' href='#' onclick='edit(" + i + ")'>Edit</button>"
        let hapus="<button class ='btn btn-outline-dark' href='#' onclick='hapus(" + i + ")'>Hapus</button>"
       j=i+1; //untuk no
       tabel.innerHTML +=`<tr> <td>${j}</td> <td>${data[i]}</td> <td>${edit} ${hapus}</td>`; //pengisian data
    }
}


//save
const simpan=document.getElementById("simpan"); // dari button save
let input=document.getElementById("entry");//id dari (input type= text) 
simpan.addEventListener("click",function(){
    if (input.value === "") {
       input.classList.add('is-invalid');
       console.log("mohon maaf input judul buku tidak boleh kosong :D");
    }else{
    data.push(input.value);
    input.classList.remove('is-invalid');
    $('#entryform').modal('hide'); //jquery entryform (ID dari modal) 
    }
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
    if (!dt) {
     id=data[id];
    }else{
        data[id]=dt;
    }
    view();
}
view();
