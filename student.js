function Student(){
    this.name = "";
    this.mark1=0;
    this.mark2=0;
    this.mark3=0;

    this.setName = function(n){
        this.name = n;
    }
    this.setMark1 =  function(m1){
        this.mark1 = m1;
    }
    this.setMark2 = function(m2){
        this.mark2 = m2;
    }
    this.setMark3 = function(m3){
        this.mark3 =m3;
        }

    this.getTotal = function(){
        return this.mark1=this.mark2+this.mark3;
    }
}