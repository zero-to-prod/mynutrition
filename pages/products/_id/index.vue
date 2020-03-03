<template>
  <div class="container">
    <div>
      <h1 class="title">Product ID: {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  validate(data) {
    console.log(data)
    return data.params.id == 2
  }
}
</script>
