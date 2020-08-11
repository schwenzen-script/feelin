<template>
    <div class="chatbox-section">
        <div class="chatbox">
            <h1>Een gesprek tussen de mensen!</h1>

            <div class="chatbox__messages">
                <div class="chatbox__messages--message" id="firstMessage">
                    <div class="chatbox__messages--message--img">
                        <img src="../assets/jens.jpg" alt="Jens Deryckere" />
                    </div>
                    <div class="chatbox__messages--message--content left-sided">
                        <p>Inzetbaar voor jouw applicatie's en websites!</p>
                    </div>
                </div>
                    <div class="chatbox__messages--message right-side" id="secondMessage">
                        <div class="chatbox__messages--message--content right-sided">
                            <p>Creatief, innoverend en jong 😄</p>
                        </div>
                        <div class="chatbox__messages--message--img">
                            <img src="../assets/jens.jpg" alt="Jens Deryckere" />
                        </div>
                    </div>
                    <div class="chatbox__messages--message" id="thirdMessage">
                    <div class="chatbox__messages--message--img">
                        <img src="../assets/jens.jpg" alt="Jens Deryckere" />
                    </div>
                    <div class="chatbox__messages--message--content left-sided">
                        <p>En vriendjes onder elkaar, ideale samenwerking! 🥳</p>
                    </div>
                </div>
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
    padding: 50px 10px 10px 10px;
    border-radius: 10px;

    h1 {
        font-size: 30px;
        font-family: Poppins, sans-serif;
        font-weight: 900;
        text-align: center;
        color: #484848;
    }

    &__messages {
        margin-top: 80px;

        &--message {
            display: flex;
            align-items: center;
            margin-top: 10px;

            &--img {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                border-radius: 100%;
                
                img {
                    width: 100%;
                }
            }

            &--content {
                background-color: #f25a5a;
                padding: 10px 20px;
                border-radius: 30px;

                p {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    font-size: 10px;
                    color: #fff;
                }
            }

            .left-sided {
                margin-left: 10px;
            }

            .right-sided {
                margin-right: 10px;
            }
        }

        &--message.right-side {
            justify-content: flex-end;

            .chatbox__messages--message--content {
                background: rgba($color: #4ba2ef, $alpha: 1.0) !important;
            }
        }
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
        padding: 50px 90px 10px 90px;
        h1 {
            font-size: 2vw;
        }

        &__messages {
            &--message {
                &--content {
                    p {
                        font-size: 1vw;
                    }
                }
            }
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