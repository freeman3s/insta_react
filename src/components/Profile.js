import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQDhAQEBAQDw4QDxAPDw8PEhAQFREXFhgSFRYYHSggGBolJxUVITEhJSkrLi4uFyAzODMsNygtLisBCgoKDg0OGA8QGy4dHiItLS0uLS0tKy0tLS0tKysrKy0rLS0rKy0tLS0tKy0tLS0tNy0tLTcrNzctKy0tKy0tN//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUHBgj/xAA9EAABBAAEAwUFBwIEBwAAAAABAAIDEQQSITEFQVEGEyJhcQcygZGhI0JSYrHB0RVyFJLh8SQzQ4Kio7L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAiEQEBAAICAgEFAQAAAAAAAAAAAQIRAyESMRMEIjJBUYH/2gAMAwEAAhEDEQA/AOmUnSdJ0gVJ0nSECpFKSEEaRSlSKQQpFKSECpFKVIpBGk6WDiGOiw0T5p3tjiYLc92wXL+Le14l0jMHh21qI5ZnO+DjHQ+VoadUllawW9waOriAFrpu0OCYLfi8OATlszM36br5/wCKY/FYo5sVO+bpnN16DavRUDw1w1FEVeh3Cja3i+lW8Wwx2nhI6iRh/dWYZmP1a5rvNpBH0XzixjGNoOII5g0R8vVbPg3aXEYR1skzAHY6gqPI8Xf6RS8r2W7aw4wBrvs5eYJBa4+R6r1gVlSpCkkgSE06QIITpMIIgJppoI0mnSdIIgJ0mE0CpFKVIpBhpFKVIpAqRSlSEEaRSkikEaRSnSSBUik6TQRpJxABJ0AFk9FMBeG9r3F5cNgQ2F2Qzv7t7/vZKJLW+tIOb+0XtiOIz92wlmGhc4Mpzh3hvV7hsdtNF5ONmXUU4eYKqRyAG9/ha9Twbs/i8aB3UeRm2ZxoLnllr26442+mo/xfIbdNLH8rE3EuB8qPp6LpmB9lYIBlmObmABSsn2UtG0pI6Uufy4unxZOTSzONO5gUfNY2Skel/wCi6672YsFHMd/ENtFLF+ziAN+z0dXPUWnzYnw1yXDYx8bgWOc0tIILSQdOdrrnYH2hmRzMNji0F1Nim2txPuv5fFeC4z2UmgJthLfxN1C86bY6naLpjlL6c8sLPb6wpKl4j2U9pHY3CmKU3Lh8rMxOro68JP6X5L3C6ORUik6TpAqRSdIQCE00CpFJpgIEnSdJhBGk6UghBgTTpCARSE0CpFKSEEaRSaKQJCdJoEAuK+3fGl2Kw0Ad4Y4DI5taZpHkB3yYV2wLhftzjriMZ/Fgof8Axlmv9QoqZ7ed7F8IZiph3gtrddV2/hkDI2hjAGtAFALkvs2951ct117AnmsXLd5N3FJMW0hpWMywwrMVEKxSqlM6wr8gtVpoqCrktHncdDYOnXdcn7YcLa13eN08R0+a7DxE01y5l2vIMThz/wB04rrJPJN4p+x2Z0fEAy/DNBICOpaQR+67mvnP2dzubxLA1uZcmvMEEEfVfRxC9CPOyRpCaFKCTQmgSaaKQIJhNCBoQE0BSE0Ugw0ilKk6QQpNSpFIIoUqRSCNJp0hAkUmhABcV9u0X/F4V+94V7T5VIa/+j8l2pcy9q/d4zDP7tpMuDnGY0LLaIcOta38FXKye1sMbfTy3YLDCOB0pO+p8gFtx26OrMPG52W6cQfGf4VHs7hS7BNYNDIKI2sXackDsO9jI4rJIF2C0eZOtD69Fitnldt0l8YtO7fYxu+HIHXK5eh7P9r3TUH6OJ1B0oaryTcdjZ5+4dE5jA6YGQxSNjytHhLX5jd/uttwrhM1tkLcpa4XemYb+h9VOfScJt7XiHGe6Zn12Xjsf7RBEcvdl7udGgFvu2sJOGaIx4nUNFzkcGlyyvyH7ONzgKtz3AXlHMlRj77LOum2l7e95f2Rb0zAkH4jZaXF4yPGCQMtpoktPI+XUKtDiZjHI7u3BrHNADoe7LgRqQLOo6XtSsYOAuyyZaBBB+KvZJVJbY13YCMnimBG1Yluv9ocf2X0iuF+zpmHw+OlxGJLh3GYRNa3Mc77BeegaL/zLubHBwDgbBAII5g6hasbtjylgQmhWVKk6TQgKQmhAJ0ik0AEJpgIABFJhCDEnSdIQKkUpIQRpFKSSBIpSRSCNIpNCCK5t2iwZb/i5BeZwkDq1zA5hRC6XS8zxmJveSNd98NeBXKjZ+a4c86lafpr3Y8h2ZjHdwj8LG/ovTS8HEtOYe7dWhAB+YOhXmOz0gbmjOpjkcyz0B0Pype6wsor4LJrtrnpqI+z8xIzzNr8kbWkj11Vt0DY6a3WjubJJ6q47Htssb4iBZA2aOpK1o4lDnAMjQSSd9jeyno7/bJ2j/5cYraj9FQw0HesAByuC2HHMbEG6vb7vXktPw3iUQeAwh2YE0DtSUnon9mpHnxSjKd8rBZHqqfFuEsw8dNrbfmvWRYxjx4T6jYj1Xmu0+IGUppN9PGYfDh0krW6ZiHu89NB9F2PsxKXYSG9S1pZ/lNfwuVcGLc8zzV25ov8Ib/Nrq/ZvDmPCwh25bmPq42tHF+VZubXxxsk0IWljFIQmgE0IQCaE0AE0BNAIQhBBCaECQmhAkKSVIEhNCBITSQJajj+ELskgDjlsHLZNdaHLf5rcIVcsfKaWwyuN3HF5X91jZw3ZzmPA9WrZcQ44+KFuT35NGk7Nrcn0WX2lRd3joZBp3kLdRpZY83+oVHgzY52SQygZ4nEi+bHWdFjzx1W7jz3NseE49I1mWIFxIzOedS4+a0OI4Pi5XmdkBLi4kmqd16r0PEOyuJZKJsHKBA734XU10Z/Ka8Q8lu8Jwl5HjxgaaZYIboc1OF9OimTXpazrdrnPFI8fKMjoZANjpr+qODMmwb7yFumxuqHJdKxHBGUS7G34hVGM03S9Bz3XkOO8NkNDDTOkLgT4jlAFkAWB5K19aVklu5aR7UuLmua2nj3hyc3ofNXOPYu2t/NlPwOqfBezDYIx3zzLM4glx1DfIDoNStRx/HNlldk9yPRtcw3RU1PLUWtsnbcdkMA6ctY0WHSkvobMzaknkF2ACttuXotZ2Wwnc4LCx1RbBFm0ol2UEkrarVhh4sPJyeX+EhNC6OZJoTQJNCEDTSTQCaEBA0JoQY00IQCEIQCEUhAIQhAkJoQJCaSDwPtbwh7nD4gf9KUsd/a8fy1eDwGJIcJW6uYBm/M3mF1j2gYXvcBK3o6E/8AsA/dcTc92HdlcCGnT4LPyztp4b9rqGAxvexXuK5dFh/rDYdHOA/vba0PZrjTADGaFO+hXosUzDSgZ2tddUs/crXjeulWbtCw2GmNp6hgB/RU8NKHOu7Porf+CwmZ2VjbaFSxfE4oWkNAzHYjoptT5XSnxvibmscG+862N8m83fsvP8JwTsTiYcO0XnkZm8m5vFfwtLiPEhJIXfdaAB5AL1XsiwwkxUsxHuwHJfLM9ov10+pXXjx7ZuTPqusMYGgAbAABNNC1MZITQgEITQCEIQMIQmgEwhMIBNCEEEIQgEIQgEIQgEIQgSE0kAhCEGs7SszYScfkB+Tgf2XLeKcMEjNrpdT7QvAw02YgW3KLO5JFBeNbECPgsvPfujXwfjXNnYGSIgsvnY6i1nPFpKo5gfQ8l63G4EdFpcRhXNPhCpMt+3Tx16aeTjTuea9AdCtfi8e550BPqFuZoHHRwVeLhzidetlWlitmSlhcGXVm26crXVvZbCGnEf2RD6uXi4MJlrRez7BYyOGSVsj2s7xjAzMQAXBx09dVOGW8ornjrCugIQD0QtTIEIQgE0k0AmgIQATQhA00k0DQhCCCEICAQmhAkIQgEIQgEISzIGok9B/CkGnmsjRog5/2kEzpiJXFwa4mMbNDSdCB6c1CMaL1HaDhhlaHMHjZy/E3mPVeaDK33Cw8uNmXbdx5S49MOJhsLWzYfqt07VVZWhUXaKfDjoq7Ia5LczxBVGQqRVZEo4hug9dVec1bXg3Be9LZJBUQNtB3kI8vw/qpxlt1FcspJutp2ZEsOHiBcbILsrrIomwKPwW/i4hykGXzGo/0WOODmm6Kzst0mppit3dtgx4cLBBHkmtcICNWkg+SzMneNxf0KlVcCFjZKD5HodFkQCaSaBoQhAwmkE0DQhCCCEIQCaSEAhCiX9NUEkgb2Q2O99fJZg1BiEd7rJkUkIkJNTSQD2LW4/hDJdfcf+Jo39RzW0TUXGXqktl3HiMXwjERm8udv4ma/TdavE2OWv1XSSxY5Igd6PqAVwvBP1XfH6j+xyt2Ymq5rZ4Xg07x4Y8v5n+EfXVe9ZhwPdAb6NA/RT7kc9UnB/anL6j+R5bh/ZljCHSHvX8gRTAfTn8VvmYYDff6K2dNlEtXaYzH04ZZXL2rvakGarMWoyqUIhqZjUwFKkGB0AIWOnN2OnQ6q3ShK1Bhbix97T6hZwb2VWWK1WfKYQXAEgEW3qL1UobVCixwcARsQCPQqSBoSCYQNNJCCKEkIGhJYsTNkbfM6NHmgbn2SOm/8LMxiq4YUOqux9On6IGE0JoBCEIBCEIBNJCBoQkgFEqSSCOVBCkolEoEKNLIooIhSPJJDuSgSCxTnVo6k/QLKFgxZosP5q+YQEgVXHj7NxAsgt+Vi1ZkOlrE4eB3oUGHhmKvwH1b/C2K8zC+iMp8TdfStl6HDzB7Q4cx8jzClDKE0kWgkhJNBdyjojKOiaECyjokWDoPkpIQLKOg+SKTQgKSpNCDHPK1jXPdo1rS5xq6AFlUm8YiLmt8VPbGWuyPo55HMaDp4bIGp3sK+9ocCDdEEGiWn4EahVIeFQsGVrKFscbe8kuZKZQSSbJzOJ87QYZuNRNEZAe8SNa9uVjj4XRvkaTpzEblE9oMMPeflcIzI5pY/M1oj7wgit8utLMzg8AqmO8JYR9rLpla5rWjxe7T3DLtR2QOEQ05tPyuYY3gzTEOaW5PEC7U1pZ10HRBGbi8Tc+jy5gYXNEb8wDiANK89lI8Xg18TtCQPs5PERIIyG6eIhxDSBsSsk/DYpHF72uLi0svvJBTTV5QDTToNRR0WM8Ig18B11vvJbac4eS05vAS4BxLasiyglheIskkkiAIfGWggtOxjY8E/h9+qOvhKi/i0IF2+s7mAiKQ5i0OLstDxAZXajopt4ZEHF4a4POUucJJA51NaBmN27Rjd/Pqbi/hMJBBa6i9z6EsrQ1zs15ad4QczrAoG0GOTjWHaSC53hBJIilLaAa4nMBVAPaSeVq1icbFE6Jkj2sdM8sia4gGR4aXZW9TQJ+Cxv4ZCQQWaOa9pGZw8L2ta4b6aMb8ladGCQSAS020kA0eo6IKeKx4ikyuYcvcTTZwQdIy3MK/7wsMfFSaBiIPfsheMzTkL2Nc13mKePqrU+AjfI2R4cXNY9g+0kDcrveBYDlN0NxyCxf0iHKG0+hIJdJ5wS8AAEuzW6g0Cjpogxz8TLBN9kSYpY46BvMH5SH6AkAZrOnJYnccjDiA0Oyxd4Sw5sxMZkDYxXjNN8v1q5/TY7kcO9BlcHPInnbZG1U7w7AaUk3hUALHBhBY0NbT5ABTSwGgaLgCRm313QVY+NNc3O1gcGzNhfkka7xuyVkNePR4PLYol400GUNjLu7dGM33XBznNLtASGgscLpWP6PDbDUmaNz3Nd38+YudQJcc1vNADxXppspHhUFvc1mRzw0PdE58LnBpJAthB+8fVBZgeHta4UQ5rXAtNggi7B5hTLR0CjBE1jWsYMrWNDWgbBoFAKaBZR0HyRlHQfJNCCHdN/C35BMMA2A+SkhAqCKCaECoIoJoQf/Z"
                alt="Man"
                name="some_cool_man"
            />

            <Palette/>
        </div>
    )
}

export default Profile;