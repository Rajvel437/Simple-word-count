let btn=document.querySelector('button')
        let func=()=>{
            // let a=[2,3,4,5,6]
            // let ind=a.indexOf(2)
            // a.splice(ind,1)
            // console.log(a)
            let text=document.querySelector('#text').value
            // console.log(text)
            let res=document.querySelector('.res')
            
            let datas=text.split(' ')
            for(let a of datas){
                if(a==''){
                    let index=datas.indexOf(a)
                    datas.splice(index,1)
                }

            }
            // console.log(datas)
            let count=datas.length
            // console.log('count :',count)
            if(count==0){
                res.innerHTML=`No words`
            }
            else{
                res.innerHTML=`${count} words`
            }

        }

        btn.addEventListener('click',func)
