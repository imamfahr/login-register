

let ambilData 


//bikin variabel
let dataUser = async() => {
    try{
        //ambil data 
        let response = await fetch("https://5f59c4ab8040620016ab9569.mockapi.io/usernamelogin-register"); 
        //dibuat asyncrous supaya membuat baris ini asyncronus
        ambilData = await response.json();
        //mau response selesai duluan baru datanya jalan
        // console.log("data user",data);
    }
    catch{ //kalau misalnya datanya belum masuk ditangkap catch 
        console.log('server sedang maintenance')
    }
}

dataUser()


function loginButton(){
    // let formData = new FormData(document.querySelector('form'));
    
    //ambil inputan form
    let userName = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log(userName)
    console.log(password)

    //filter array object ambilData 
    let user = ambilData.filter((item)=>item.username === userName);
    console.log(user);
    //conditional untuk validasi data dari mock api
    //make sure kalau formnya diisi
    if(user.length>0){
        //alert username ditemukan
        if(user[0].password === password){
            //simpan ke local storage
            //di local storange masukan item, dengan key "user" dengan data user yang udah didapat
            localStorage.setItem("user",JSON.stringify(user[0]));
            alert('username dan password sama');
            //pindah ke halaman 
            window.location.replace('./index2.html');
           
        }
        else{
            alert('password anda salah');
        }
    }
    else{
        alert('username tidak ditemukan')

    }

    

    console.log(ambilData)

}