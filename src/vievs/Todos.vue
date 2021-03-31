<template>
  <div>
   <h2>2 Page</h2>
    <router-link to="/">Home</router-link>
    
    
   <add-todo
   @add-Todo='AddTodo'
   />
   <select v-model="filter">
       <option value="all">ALL</option>
       <option value="completed">Completed</option>
       <option value="ncompleted">Not-Completed</option>

   </select>
   <hr>
   <loader v-if="loading"/>
    <todo-list
    v-else-if="filteredTodos.length"
    v-bind:todos="filteredTodos"
    @remove-todo="removeTodo"
    />
     <p v-else>No todos!</p>
  </div>
</template>





<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'
export default {
  name: 'App',data(){
    return{
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted(){
fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
  .then(response => response.json())
  .then(json => {setTimeout(()=>{
       this.todos = json
      this.loading = false
  },1000
  
  
  )
     
      })
  },

  computed:{
     
    filteredTodos(){
        if(this.filter==='all'){
            return this.todos
        }

        if(this.filter==='completed'){
            return this.todos.filter(t=>t.completed)
        }

        if(this.filter==='ncompleted'){
            return this.todos.filter(t=>!t.completed)
        }
    }
     
  },
   methods:{
      removeTodo(id){
          this.todos=this.todos.filter(t => t.id !==id)
      },
      AddTodo(todo){
        this.todos.push(todo)
      }

  },
  components: {
    TodoList,
    AddTodo,
    Loader
    
  }
}
</script>