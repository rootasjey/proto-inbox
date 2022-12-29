<template>
  <div flex h-full>
    <nav p-8 b-r>
      <div mb-8 style="font-family: Rubik;">Mail</div>
      <div flex flex-col>
        <ABtn icon-only variant="text">
          <Icon name="ri:inbox-fill" size="1.5em" />
        </ABtn>
        <ABtn icon="i-bx-star" icon-only variant="text" />
        <ABtn icon="i-bx-send" icon-only variant="text" />
        <ABtn icon-only variant="text">
          <Icon name="ri:draft-fill" size="1.5em" />
        </ABtn>
        <ABtn icon="i-bx-archive" icon-only variant="text" />
        <ABtn icon="i-bx-trash" icon-only variant="text" />
      </div>
    </nav>
    <div m-16>
      <NuxtPage />
    </div>
  </div>
</template>
