<template>
    <div class="chatbox-section">
        <div class="chatbox">
            <h1>Een gesprek tussen de mensen!</h1>

            <div class="chatbox__messages">

            </div>

            <div class="chatbox__typing">
                <p><strong>Jens Deryckere</strong> is typing...</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.chatbox-section {
    padding: 0 30px;    
}

.chatbox {
    background: #f5f5f5;
    width: 100%;
    padding: 50px 30px;
    border-radius: 10px;

    h1 {
        font-size: 30px;
        font-family: Poppins, sans-serif;
        font-weight: 900;
        text-align: center;
        color: #484848;
    }

    &__typing {
        margin-top: 50px;

        p {
            text-align: center;
            margin: 0;
            font-size: 15px;
            color: #484848;
            font-family: 'Helvetica Neue';
        }
    }
}

@media (min-width: 992px) {
    .chatbox-section {
        padding: 0 100px;    
    }

    .chatbox {
        h1 {
            font-size: 2vw;
        }

        &__typing {
            font-size: 1vw;
        }
    }
}
</style>

<script>
export default {
    name: "ChatBox",
}
</script>