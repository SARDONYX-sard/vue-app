<template>
  <div class="bg-gray-500 fixed w-full top-0">
    <!-- <header class="flex justify-between items-center fixed w-full left-0 h-16 bg-gray-500 px-2"> -->
    <header class="container mx-auto text-white">
      <div class="flex justify-between items-center w-full left-0 top-0 h-16 bg-gray-500">
        <h1 class="text-4xl font-semibold">HR</h1>
        <div class="md:hidden">
          <button @click="isOpen = !isOpen">
            <svg class="  h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-show="!isOpen" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              <path
                v-show="isOpen"
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class=" left-0 w-full bg-gray-500 h-full overflow-y-scroll md:overflow-visible md:block md:static md:mt-0"
      >
        <ul class="md:flex md:justify-end md:items-center pb-24 md:pb-0">
          <li class="border-b md:border-none">
            <router-link to="/" class="block px-8 py-2 my-4 hover:bg-gray-600 rounded">Home</router-link>
          </li>
          <li class="border-b md:border-none">
            <router-link to="/diary1" class="block px-8 py-2 my-4 hover:bg-gray-600 rounded">日記1</router-link>
          </li>
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 my-4 hover:bg-gray-600 rounded">料金プラン</a>
          </li>
          <li class="border-b md:border-none">
            <a href="#" class="block px-8 py-2 my-4 hover:bg-gray-600 rounded">お知らせ</a>
          </li>
          <li class="border-b  md:border-none">
            <div class="my-8 text-center md:my-4">
              <a href="#" class="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-full"
                >お問い合わせ
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return { isOpen: false };
  },
};
</script>
