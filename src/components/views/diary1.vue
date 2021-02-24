<template>
  <div class="container mx-auto mt-16 md:mt-0">
    <p>コンテンツ領域</p>

    <ul class="text-center mt-10">
      <li v-for="(n, key) in 30" :key="key">{{ n }}回目</li>
    </ul>

    <div class="text-center mt-10">
      <p class="font-hairline">fontの太さ</p>
      <p class="font-thin">fontの太さ</p>
      <p class="font-light">fontの太さ</p>
      <p class="font-normal">fontの太さ</p>
      <p class="font-medium">fontの太さ</p>
      <p class="font-semibold">fontの太さ</p>
      <p class="font-bold">fontの太さ</p>
      <p class="font-extrabold">fontの太さ</p>
      <p class="font-black text-blue-700">fontの太さ</p>
    </div>

    <div class="text-center mt-10">
      <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">ボタン</button>
      <button class="bg-red-700 btn hover:bg-red-500">ボタン</button>
    </div>
  </div>
</template>


<script>
export default { name: "diary1" };
</script>
