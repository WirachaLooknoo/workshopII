import { ref } from '@vue/composition-api'


function counterIncrement(){
    const counter = ref(0);
    function add(){
      counter.value++;
    }
    return { counterR : counter, add }

}

export default {counterIncrement}