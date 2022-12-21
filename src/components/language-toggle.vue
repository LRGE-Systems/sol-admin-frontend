<template lang="html">
    <div class="languageToggle" style="float:right;padding:10px; border:1px solid #ccc; border-radius:10px;margin-top:10px;position:absolute;top:0;right:0;">
        <i class="fas fa-language" style="display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size:30px;"></i>
        <select v-model="lang" style="background-color:transparent;border:0;margin-bottom:0;">
            <option v-for="lang in options">{{lang}}</option>
        </select>
    </div>
</template>

<script>

  export default {
    name: 'LanguageToggle',

    computed: {
      
    },

    mounted: function(){
        let val = localStorage.getItem("locale") ? localStorage.getItem("locale").replaceAll('"',"") : "pt-BR";
        console.log(val);
        this.options = this.$i18n.availableLocales;
        this.lang = val;
        this.$i18n.locale = this.lang;
    },

    data () {
      return {
        lang: "",
        options: ["pt-BR","en-US"],
      }
    },

    watch: {
        lang: function(val, oldVal) {
            console.log(val);
            let old = localStorage.getItem("locale") ? localStorage.getItem("locale").replaceAll('"',"") : null;
            if(val != old){
                localStorage.setItem("locale", '"'+val+'"');
                window.location.reload();
            }
        }
    }

  }
</script>