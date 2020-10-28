/*!
 * Copyright 2020 Cognite AS
 */

const image = new Image();

// Image source https://github.com/nidorx/matcaps/blob/master/PAGE-26.md
image.src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABgGlDQ1BJQ0MgcHJvZmlsZQAAKJFjYGCqSCwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxqOqd2d+pGwehjat+yq+1cc3DrAwPulNTiZAYGRg4gOyWlODkXyAbp0UsuKCoBsucA2brlJQUg9hkgW6QI6EAg+wGInQ5hfwGxk8BsJg6wmpAgZyBbBsgWSIKwdUDsdAjbBsROzkhMAbJB/tKBuAEMuIJdFAzNDXx1HQk4nFSQm1MKswMUWjypeaHBQFoIiGUYghlcGBQYDBnMGQwYfBl0GYCWl6RWlIAUO+cXVBZlpmeUKDgCQzdVwTk/t6C0JLVIR8EzL1lPR8HIwNAApA4UbxDjPweBbWAUO48Qy5rMwGDxhoGBuQohlrKcgWGLPQODeDBCTH020EnvGRh2hBckFiXCHc/4jYUQvzjN2AjC5nFiYGC99///ZzUGBvZJDAx/J/7//3vR//9/FwPtv8PAcCAHALbUa33lfYEHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AobCyAEEhU0UQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHjalV3bkiLXESzoC9cZdle7lixF7IMj7Ad/qn/RVliybMmyZhkGGKCBBj+s6ig7yTqNJmJjbzPN6XOpysrKqjP429/+djUzu16vNhgMbDAY2HA4tLIsbTKZWFmW1rat7fd7O5/P1ratXS4Xw5+5Xq82HA47v1+vVzOz9Hcz6/zc5XKxtm07z/Ev/34elz9vOBzaYDCwtm3tfD7b6XSy6/Vq5/M5fU9RFFbXtZVlaXVdm5mlZ1wuFyvLMn2GP78oCjMzO51Odjqd0rNxrP5VFEXnl7+nf4bP4+VySe/jn+Hj97nzMU+nUyuKwo7HY3onfGZRFDabzWyxWNjpdLLVamVN06Tvw3nHL5xb/LfL5WIlDsJ/90Vu29bKsrTr9Wpt23YWHxfocrl0Jtf/HQeE/68GpDaBP5tfwsdzPp/tcrnYcDi0qqpsNptZVVVW17UVRZEWwZ91PB7TJuHF8gnxBR0MBukQ+Lh9kx2Px84iFUVhZVlaWZbpM3Hjq7nCeTezNObL5WLn81keoLqubTqd2vl8ts1mY03TpHGphY/mFte69P/gTaBOLf7CBR0Oh9a2rQ2Hw5tF8pfljYaf65/hz8Hv8/8/nU5p0cuytNFoZKPRyKqqSiceFxInECfRTzlaFPydLZSP1Z8zHo9tNBqlzXA6naxpGjsej3Y4HNJmqOu680z/bJ7H6/WaNu3lcrHD4ZDmDdfBF9/MbL1e236/l3OFm1ptAt4MJU4Un27frfhwPvG+0GaWTheamMgMqQ2AL+QL0DSNnc/nNPnT6dTG47FVVWWXy+XmM/CXLxr/P1shXxh2P/w8f0devNFolMbcNI01TWObzSZtVLcqfDh83t1FuYXiuSrL0sbjsRVFYa+vr2lO+DRHi8//jgei4wLYLKEFwIfipsAHKlPEbsD/7j/DE3q9Xu10OtnxeEy+ej6fp5PuC+obEn0qnlb/HceMC41+GBfbD4JbFDTZuFkQE7jFGQwGaZO6RXh9fU2bt67rjoVyrDUYDOxwOEi/79akqiprmsb2+33CJYy5/J0iF8DWouMCcKH5FLA7wMlmP+0P9wnCF1bPRdxxOp3scDiYmSVTy2bUzb0vBO9uXEj8N5wsPgkM3HDh8eTi+7CP5w3sG3c6nVrTNHY4HGy321ld1+k0O25wPKHG65vEN5SDPv8+drO5Lwad1+vVSpw0BSR48ZWJ50lEk46m3jcLY4jz+Wz7/d7MzCaTiY3H405UgSi9LEuJotmPIwD033E8yiziBLKlUT4Ux6Asqf8aj8c2Ho/tfD6nk+6Wwt0cR09u2aqqSt9zPB5vcJjCWJEVUAel7DMXKkrAk4MbQ/0M/r/7bNwg+/3ertdr8u24iH7a/d9wlzv6xs9UoSJvCPb/yl/ySeF/ZzPt74KuyDcbbtCyLG02m9nxeLTlcmnr9boTauM40d0cDoe0+BGuUqFzzhI44C5VWKJMmzrx/H3RTvOXc2DXtq3tdrt0OqbT6c3pcx/M5h9NI5rhnAnk08LjRovC40Bcge+IGwMxA4NqPiyOazzeX61WVlVVQvg4FneLDo755OM40MKyJYxcQbIA/NDIfCCCxYHyKcdFcfLIB7jf761pGiuKwubzeQJG7mv9xLMlYB/NII5fjMOo6KSrU65cCm9qhSXYwuAYGF9UVWXv3r2zpmlsuVzadrtNmGE0Gtn5fLamaTqRUUTm8EG455397yWHfAzsGDUiaFOxpm8QRpwO8Nq2tel0mtCvLzqSKMpcqZBMvVhkFpU7UBtMPVtZumizoFtSB8ldl5/4wWCQNsJ6vbbL5WJffPGFtW1rx+Mx+5loYdW7RiAZfy/ZxOMH9G0ChejdAvjv/iL7/d6KorDFYiERvZ98NGEK6KD5V0RPNFF4Chn0KbPPoFfNQy7WZvCLOMCt3uFw6LiFN2/e2MvLi/3jH/+wh4eHRA5dr1cry7IzN7zROWTNYRt0ryX7cwYZiNpVjM+cAVoBZ7aOx2MCOz7JfuJ9UdD0c6zOuABPm0LCjD944ftOewRsmRPhRVbg0RfFf7aqKptMJtY0TWfDOU56//697XY7Wy6XKWR0V6rcNLu6vq8bkolPj4rpmRLOoU8ndy6Xi+12O2vb1h4fH7t+B0I5PNFMaiDVrHw/x+/3+EF2MfckTnI4QJ0wB4Uq9h6Px50owefVreBkMkkU99PTk202G5vP5535UGPhOWGgGkUGQ4WIOeTLgUIflLNTnkXbbDZmZvbw8NAhNHzx0fw7y4exPsb+vFkQATMw5BOuACQyg8oN8IRGG94XmRlK3NA4Vmf0PBJifsPNvLOg7969s7qubbPZdDKnmLBjfKBctTqk/ueSzRxSnNGu4ZPmg3FSZ7PZWF3XNp/POz4nonHVCceQBicqOtF8Mpmq7ov1owhIAVLlShStnOjWX13faDRKC8zP8twGxvxuPXe7na3X60SJq3dCfKA4EA7fE/ZQ8TsnaCIziMSOZ8VeX19TbO8vzwvINGeExvHvjq5V7K8yYYrQ4mRQxI71bYK+UJFdElq/3W53Q/e6yXdSrCiK5PNPp1PSCaxWK5tOpwkcKmJKhZ6RBTCz3yxAn+lQdDCe+uPxaNvt1kajkU0mk87i4knHiVfiCPydQV4U4qgdz36Pn63Qfk5U0cccKs4BN3pVVck94pdbShfc8OINh0M7nU42Go3s7du39unTJ5vNZglLME7jw9PHGg45XufJZ3yA3+chXtM0tt1uE4/vQM99Gy40U7ycuUOqGK0RAy4kXSLTG0UtDB7v/cq5iQhLIFbwhA/O8WKxsMFgkEgfprI9RHRxzvv37ztJIU6JMwvIhwA35WAwsKECCYzWVU7AxRCHw8HW63VKeLgUC+N7NufI/CkWUqmJWJiCoCjiANRpxZdX38efo/QRymVE6Nx/d5CM3/P4+GiTycS2220KC3EhfQ18jtq2taIo7O3bt0kXwGAwEogo63S9Xm0YERbKr+BEOFW52WxSrtuFCxzjq8VnQQbG9Zg34J3tCFqZP/+ZSCSCAhTMp0fRzT0hJIet/Hmoe8D/H4/H9vDwYOv12g6Hww2NzVwJsozD4dDevXtnu92uIx9Dy+hzhO+KVH7CJzn5EJ9G1sVtt1ur69pGo1FSv6DpR9dRVVVnctACKHGo2tEMSO/RwanwMQJFvFlzz+bf2TqwtcS/V1Vlj4+PdjgcUrgcRV58iHy8ZVnaYrGw19fXThTmohJXL+XY3Ov1+hkDRKecdw/G+a+vr4m4iDRwatAe9+MmUdIuJoFyC6iUOQr98gJFGUx10nPkl+JReBPg5vcIabVadUx4n7ADuRNUS202Gzufz8nKsAVQhziNF3eof7CLL9mMuOnfbrdmZimp4+ZfWQ5W1Mznc/v48aN98cUXHTm1ynqxG1J4RAFAxQJGGkUlO+9zAyqrxtR0pGr2uVqv1wkXMKGj8hN+WPCzLpdLcr/r9TqtmzrpYRiLA2X/iYvvO8w1aXjy0VfxwB3I+NdoNLIPHz7YH/7wh5scO6pwGRiyzDuaZLWwyqzzpEesopKOq39ncKkApH/PbrfroPhc3p6BNOZO6rq26/VqDw8PNhgMkjtQqqUIGJd9oQ9ugP1+b/v9PpERTO0qMoTB0Xa7tR9//DHt4FyYxSpkxA/olljVq15YkUIKKKq6BUVQRZOMIR4mgvDnnOqNSKvISiFuSlRuWdrpdLLFYmHPz89Ja8GgV2kkzew3RVBfbYCreKqqsqqqOmlNJngY6WOat21b+/nnn+/i4BlguctAMKjSooq34CKRKNcfbQLFlnKaWlkdfj4DwkjHwGOPimNQiPL4+Jjk6FhowuPthPosjMBkA7oGlzdPp9MbAsd3Ji4UZsMGg4FVVSUFlszIKbUNF1cwsFHWR20Qj6Mj/95HG7MUS/ECnEhjidY9GUac25zcnj/XaxT8oPr7qkKT5AI4z81MHypS5/N5h+hRIQqKOB28RJOAAFBtRD5VeLr4pRTZhAQNppvVZKiSN1VIweOLijAUd8CJNrXhlb7BP8utB6eGHWedz2ebTCZJQj4ejyXNjfNTIkGhTpGHfF6Nw3G+CtkYbEVaOvWiKoOnJNwKP/wenj4KD9Umjfw8vw9L3vkU42HDwlGmw/F70b36IiMmYJbwfD7bbDZLHA1GYgpwllEs7IN+fX1NzBXLtPGlMQRyfX9RFNY0Ta+eD/16tBH59KF/yxE3OZDFG6Ev0xidzD4pNi42RywqJa3EppEa2zcBbgbXHbgMzzcHR0+yLgB9//F4tLZtUx4aK2AVJ+6boCgK+/rrr62ua/v3v/+deO5cJQ/69hz1yieFcUWfNPwegicifaJows2zqoD2PzuvojaHUjnl1Fio2/C/Y2n85XKx+Xxuz8/PxhaesVfJOx+R6uFwSFW4zuDxALlmzwd0OBxukkkKAEbmkpU8+L2cM2DSKYrFGZmzrDqXSYwKY1URLZ9YP4G4cLl6hByHgGNgsanPjeOj6XRq2+3WHh4e0uexrqLkl/IvL2FySZcvPgM+9QKXy8U+ffpkq9WqUzShkK7K0eOCKgEkAz6up1eIPIoM1AZVglgGyQpIKq0CLzjTvlEdZq5Gg78HRbIOqN0K7HY7Ox6PnSYZiKFKPAFu/p308eJM1tPhLlLNFdCSMBOYyzxGNGu0qBiKRdnLKAZWYZwSkOQKZHJ6AVUHGdG9rEvgRY4KeCMXgfPpGUcPw7mQZOgL5pkjL832ej1H/FzCzaDPQz6UfXHlkKrdizQA+GL4ghxloOBEFZDk6GEUdXJFUo4+jYpJ8d9yMi0Oadn8I7B2F9u38dSzXE42HA5vCkvTBmDT7QWbTiQoAQW/HCZ1ol2uMm7RIvVJuHmTOTuZE2gqmRZPsHJlKr/PHUmQ/FK4Rsm1ImuXqnZ/xU+oc2D8owplMNLwn314eEjtZLzeMM0xL5JnqNxkqDx8TjSCp52zd7nYnXsLsNWI2D/k2ZUKKccPRMkfLjyJ0txK4II1D4qLjwpsWEDqgLFv4VVvJnw39P++CXBDDdn0+A9wvR738olKoZSIFF0BLti9ihs+wVztg1qDvuyXeo/xeJxCXdxAqstIJJ5ly5UTpkaAlCloLiqN8hNctcz5icvlYrPZrNOEwjfBkJFq27Y2m81SzI9FnKr4k09nTnuPANF9HLdZi4Af73LvG6QYOHXKIzc2mUzsm2++sY8fP9r79+9vElzRxnTMpLALS+Aj8osl8vyeyrQr/V+fwPV8PicrwBT6EHUA3toENfuo7OU0YyS85EVQfLyLF1QuXrkS1NBj6OoRBkqhFL+vNoNXLj0+PtpoNLLFYtHBEpjb4OTX27dv7e3bt1KDF9U25MApWzelYWSQGPH8OF6k7Ou67qiGLpfL5w2AqNETCKpok30sPihqRKTy2MhmqdJmBk94ir755hv78ssvE17Bz0Okq1yIcguo1nVtvppkNO2TycQ+fvxoHz9+tIeHh45Qlq1AZL6VGIWbS/KpVwkrnD+2eniYL5eLjUajToOptm2tdPPvyNBjf25r1hcWqTCNY2EVEqk+A5z08e9tmsZWq5X99a9/tePxaE9PTx2dgT+PGT8mlHDCttut/fTTTzYcDlPnTbeInA7m/LoTZOwOo3K1HL5BjMRKZ5U5RGV0LoLCVjWj0cg2m42dTqfkEko8PQ6ClJ9SG4CTFUxCqMRJLn8fsX44hv/85z82Ho/t3bt39vT0ZOfzuZPt8g2Ai5ir9vGNxCdOjccnc7vd2g8//GBFUdh6vb5h5WazmRVFkbSTPJaorgC/T4leGOzhZlel6Vym3ratjUajBPRTcaj/53Q6vYnvlc9X1Tw5LNCnsuWBcg6ew6h//vOfKdvogBA3gdI15j6L2TvF6jHj6d08eB6qqrJvvvnG6rq2H3/80ZbL5Q0oVJlXThMrMQlrJllWx+6DtY9t26YsoYPoIZoJ7JEbMVY5ti0nwuTkiWK2nNRBkz2ZTGyxWNycYG+Vys/B2FmVl+XUOWhyVeZSpWN5wh2bIJnDTa9U+KiqozgyQFwRFb6oSiZ059gAMymCfGe4egcnU1GcESUZDYw7kESly6rJw/l8tj/96U+22+3su+++k/42om+jvn8Rr99X94d/5kaYPkeHw8H+9a9/2XQ6TU0vPV1clmVi5fb7fW/TB6VC4p5AUSfXKA/ifQp8zVNdgNenI9qPkjLKX7IuPurioWrxVaoVZU7ffvutDQYDm8/nlqtl5LHhaYmaODKxpXL9GAarDcWfsd/vbblcpnJvfLfRaJTK55yKVhY3IqIi6xm5VWy84e9eVVWKdkrfTd54IOpEGZUtMUGEZicqcmBLgKbVuQh/OW+Z9t1333W0hgrxRp/HYaoytRhD89hUY0iuWeBwTG3Q0+lkr6+v6fmLxcI+fPhgm83Gfv755xSJMf7hpJhqapWzIPxOvtZt237WBHJm7J48uiIrlComCoEUIsZCUew+ggWWub44qh4hkorj5Kl4H8uz2TJhroK7lUZ0uP/ZS+q8NNwrhI/Ho/3yyy/SKubo9ahcTrXDZxDZtq0N3Tep7FfUCJonCZUmyryyKe5rxcKgyReeFcecgeOxMIHD1icaC5pNVSfJERFHC6qFjurA4l1APW/Pc8RiD6y8Vhb4HlzDVmvojQc6JcPEnSsNXh9B5C/uL6nSxrmmCqpejtO5yhqoTKBqOq1MJfcGwA2FixlpFKOmknyC/Tnr9bqjl1SSfC7OURgod2VMpIN0fFWi2eXYkxdN9aTJJWFUzV8uWuC4FjckM4ZRkiWXjkZlLH6WWlgUuJ5Op5s5wGiAMcY9m2AwGNhms7GffvrJ5vO5LZdLKaHHknyl+mG2U9HFqtWvg/6SgQTGieoyBv4QlexQdWgsBlVsHy+a6nkTpWijsA+tgCJSfOH9RKCF8EnCfAEjcUzecASB4FBxCOfz2Z6enmy5XIbKKAdseEVM1KJXsYaROAf0C+VNOOSnA82OYth4QfvKnnIl3oo8Yl5A8d3qciYOz9j/4+8fPnywtm3t06dPYbNJb9TEuQDFGCr3qe4pYHenzDluOi/66NMWqjnCMfszXPMxVHIuJaDgU88Lyrl9lk0pWravSZOipZX1iEIh1WeIy8j++Mc/2rt37zob5i9/+Yu9efMmxfGYUWM6XJVzRxFErhZBgUzPVXg1MfdaUA0gmAuJtJZwZU0pmaNIY8YxMwMl3iSqzInDtIjUQD+NUYYCVaoalyMb9e9///vfb3ICP/74ox0OBxsOh/bnP//ZvvvuO1utVimdiu3yFcmk4vGcDEyFocj6cTpYpYdz8jAFpr3DSMlgSBVH8I5V3b8UMkZRI4d47ttQXaNEoz4ZKGTEujj+xWxjdLWN/9mrnvH7PIEzHA7t+++/t6ZprK7rRON++eWX9vT0ZKvV6qZzuYPG6OJIRSQp8KzawOKBVA20ouqoTjEo0P2DweC3W8OiFit9SQYEWHxrBloJVMx4MYdvvijs5CSN6tatiis5KuCESFQMwwLO6/Vqz8/PKWxaLpf21Vdf2ddff935P3w/DN0QtEUWLFfYij6c8QBGNFHSTV31w1xI6R0mMPnDk6PoUMwaMv8eTSbHuXhd6n6/T63Trtdr6nRRlmXKq/PNWhENnLsoMkoOcRcPlGe7fM2tw7fffmur1aqzkeu67txxyFp+VgZxqjfXtj833qiLisIFLCsbDoefK4PQz6LWTlXiRMSL6mad6zjuz/nw4UNqjb5YLOzt27epIcVkMrGqquz5+TnRpNgSjYWbDNhU+baiVVWXMt/MHP7t93v74YcfOnODdyqrOgB2P6p1m7pfKMfwKc0gWjoFNPH5/n2lDz7qzRu1M3HFMJssjKXV9XH4fGfDvIs2K1mc+mT1S9QyTlX9qMZXbNX4NCnwxBskYt0U6IpOqNoErDFQtRSKEIoSUMql4zNKVI0yv85EB1fBqElFLgE3QVQfuFwuOy3QvQml3yh2PB5tt9vdtJFXyZwPHz4kda/n5r///nvJYURavQitRz2Vo43FFoIvlc718EdXzCrhnKYhCuf5Kh/8zBIJBqXaiQonUQnLDCBe8Ij6PA5z/FQ4BtlsNqkhRV3X9t///je1qOGaObYsZpawgn+/X7qUaxAZ9SpWrKfCRlFDZgav6FZyIDC3WH3C0qgRVC4LW+IV7JiocGsQ5feRo+b+OyigZI2Ain85MnAFMHbQVoWYLBnf7Xa23++TyDOq2GVwmkue5Pj9SHmj7jFWlkOF3SpiUalsdb08W6Xo4quOK+eXUehU7XjuUKGUQmx6o4nHGN7DySipoZA6jo1Lzxj5Rr4wEoIq/35P7X5UnMJzGgFCdVpz4bmy3HiAWQ/gn1MyEMKya9XESN0BHHX1iLpx5nwZRwxsrlk+heCQQafKOjIzqQQUTMsqnkQdHLWJIqAYbRw0/4zq++4GRveIa4J9gnAtzufz5zCQrxyNBAfRtaROK7JQgweh2DA+obw4yuRyiKbAmbe25WtquPBC1R2quFkBPEVDR907VPUuz4OqnVCp+JzVUdfVMW2P710q/R/XnDMAyl1IpGJgpdRljkC1heer3DHJxI2YFOePqV60ZNyePmqujIvIUvMINHI4misHj274VMmbeyMOjBpUcgnnpm3b35pFs89TDQ4RJGKygs04mxp1kll5rFgsjCjw55TPYyHlzYvSFfKRikaNQ+kf7uldFNVERh1B1FgiU88/E3USVXON71Fyu1a+sJHboirqFHco07C4ee5pdcIhFPtADFm9OJSRME8IF22qhheRwkhpJVU4qWRyUcZPAVyOTriXT1RxHc1hdKkF/l8qDkV5U0Qm5O74UbsZJx19cZ9ciSMNJn4Y8CgaV4E0Vvuo+r9IucMKKRaV8viQ94hYuYgLUPqLaIMqljJXycQ5m+v1+pkH8ELBXK99VQShysQU2ENAGCUqolIybHTI2r2ojDsq4+IcRVSmpWTZWLeg5GdcFNt3e6dqO8/AOXcJBrfr442jxoAZRD8Upep8He20qMqHVbjYPFLRsDnyRWUhWX+HJ00JKRR6jpizHMOmQF6OGIquuFPm+vemhu9RPXEndbd6qgQ/9QfwH4yuU8stvAJxDIByeepIIBFZiqjMC8eGiS2+kCqaVMVrRGPmLGOkQFI0sYpU+m4qVcomfAa/nyLGVFrYN0ip2r2xsvXmssGgxRuqilUVCw5Y8QlKIJmbVL+N0wkirgdkd6FSshwb9/nsXDvZvqIM1UcwKrfrE3qqht2RNVRVRe4KS6xcjV5E9eBVSRHuAaTQOde+K8CV09Mz2VEUhX311Ve22+3s5eUl1DKiKeT7CCIAmMv65ZIykc+/B7UrwWxf63ylKFYVUS4yLYoiXWBdeqjG3bE4BMtJxHjCOe2p+HgGJBGAi7qH+vdVVZVu3PYaO7QyKu7nEDcqCv09JjqSzvWJXxXax0qg6OLN6Fq4SCugoqK6rq3EzlH4gGjxlXiRlSxR2ZJqO6N6/uViVwasl8vFnp6eUvrZXYK6twdZRSVAUQg9KtDM5RlyTF/OiiiNAja84LsVVBeQHPDFNUobwGvF8Yvr4SNRJWfcUMjQNwGK31d3BEcnxuldNO+uK4hy9pxhU1fZRMUhCh/0RS8qNOy70DraCEx5K7wRqaT4GS5tL8vSht4XL+nEodWp6qun/FtEVXJcmruOViUz7hVEKCTvZg41hMqn8wmLFiPXJY0roFV003dbiapm5iwq9xlSBFhUiIMXgHhziF/HPEwdI1AIijtG3UjJiD2K9bnIUXHYSrBxT8UrdtbKNV7Kxd65f0MxSw6kjkajpG7OJWByBTAqP8CAMAoh1cbmZ/lt706hpwsjfACOCvF+Geb4FVDDU6dSyhHTpvxylAlD369YQdWbUJnqKOLIMYcMYplg8hYy3jDS9YxKvxhFBSqncE+95b38AY+j0ybOY2inObFYg5tF5VDy7yE41G5lV6C6hUfAUNXvRT0M2R+r5JdyWYqS9XE0TZNKyTysvsfUR+xkFMfnXGFOBIpaSrdq3uByiD1lPUbMceqqrRmb+SjH3vcrwheKo1cNqxEdqz7B3JQ6QtC5tiyqZOt8Ptt6vU79f9R7KCwUldRFSap7Fj4ShvqzveAmrTveTOFuICpsiDaDMrNRWzmVD1d3DnCLWbUYSpiRk3vnJOARWo+IHbZOrkC+p01LBDKjjmdRoqyvJ5HKRzRNk3I1g8Hg840hTqhgtkvJm3Pp29yt2arFuco55HrxR9agj77NTaA6QUgcKUsX3R8YgVfl76PkUK4WIbpmPqdm4s3tEY/7/4QBMJTZ7Xb28PDQAYNcsKAaL0R1A4rDz5n7KL2r0tT3mMSofCxqdhHJp3MW5B5iJ9rYUeY191m5cJjdMeZo/E5h0gj+NkF1XSc3wFe4YciF+YEoXle7mJMYkUmMmlUpsibCGSqppNLXCjhFobA6ibnCE/WluPvIGuQkYQyGcyGv/7lpms4NsKk83L/cDex2O5tMJp2SJoxVc02fVLMGJpSiiWYqNgeaIq18X46dpdNqQXONnbiqKZJ5Ky5enWKlpVTRj5KeM15T7tijG7/C9+Zyb5zwtm1tPB6nDaAWgAs91WlU1Tw8aWweuQeuyoJFDFvuPh3+d59kLC9jNTKGhHi6WFiBCTPmKaJ6h5wkLHJBCnQyDxM9A83/aDS6vZ+YpVIOEA6Hw02Ha97BUf/AiJDgMrH5fJ4aJHJ+PufjVReNnFtRVCu+W45lU3oFZAlzl0UpU50Doip05HSuqrrKVWYNh0M7HA6J6r/BReyf/V6e3W4X1qlH9fY5lk0t0HQ6tTdv3nQuprynK7mimqN2qY58lSI2pwdkqlbpDFi4mqNpVYlYdFCiSuZc7iWnMt7tdlbX9U29x2Aw+CwI4YUejUbWNE26RURl9iKdWa6aGF+wbVt7eXnpXFDJNQiRHu6epBTToEhVq7Erqll1GlWtc90VcVCcmwAACrxJREFUcL2EqkTKZRBzQFCRT9GB8Dkuy9Kapkl3QWFpXcIBKtvlzRk2m83NzlftYLGtKcf8zA7iRluv1/by8pImq67rTtuZnNQqyjoq/psxB/t9ZX1UTWOuKIOtjGoBn5PC33PrKiuBVM9F7u+42WzS/UBSpqZiXu9rb/a5QyXX1qnMH19+hKlYXBQmSBCFs8o36uARsWtoPXCRlannTF/fla7chk3VCCpuoS+TmOt6nsMG7Io4GVZVVSqv9w2AUYY/o1SXGPnkTSYT2263aTPwSWFTGpV95+hf1P+rCc6FjSpe9uew9IuRvVqAqL8P9zJWdDdrHVUxS870MyBFF8J4Symv2PWWZWmfPn36LesHFqkTskdKF9T3bzab1C2rz4z1UZJ9SFhlBXMKl6jxgqKwOcyMmLk+di66mSPi4/siDH+uK7F4kRWNzkQdvmNVVbZerztrGLahy+n9zMym06nt9/tOKzmFUrmnPi+OuiRSmWVG50p8krs9O6pEVmxlpFKK8EYkic/5dNVeNqoSqus69fCNGL7IdWC3Fr8BHq+miSKPYU7m5AObTCa2Wq06N4pHcW7OOkSMW8TIqYxWdJ2NUteoNHJkbfqijOhEq8ZPqr5PYQR8Vl3XNp1OO4DNDxsKXyJq29+nLEtbrVZWlmVqvhX1D7xer583gKqwwZZxzgp6Sze+4p2JHvbj2EOPTZfKl0eFFLk7DJX5VUxkBEpzXEaEG/pqGThSyfVVwK5gLr9TuYic7tD5G2d08eq6CD+VuZOGoGg+n9vz87ONRqMU80aFnkwv50qjWHUU+SpFJed4dSX3UpEEbiZ1KUVfZjJK5UZ8Apd3I/D2Cx2jqMK1fCyju1wuKXez3W5tNptJt6jmpezrlIUuYjKZ2HK5tPfv33dMlCpcVNfAcZ4g0ujxhsmlaCPhQy4yyYlVuNlUbnHVpsuVdedqIvF6HRVq8vO5OqooCvvll19sOp3enPpcTeJQyb7xA/Dk+HWt7mOwQTKaV9XiPIcbchp8Zaa5aVVOcRRtLKWZU9fh3KO94xI0/gzuzqVOIp78XHdTzgU4abdcLq0sS5tOp507oHNjTyAwusJN9brx8isPDVkurnLUEUDknZm701eRK4rDiKIZhQ8Uq5kDsrmMmxqzN6pi8Mr1+pEWIddxDAmf5+dnO5/PNp1ObyKjHLk1GAw+9wiKZMiqD79fcbbdbq1pmrQJItZNycmia1lytQB48nM5/z7tnGqIpU5ZjuPIJXUUJ6HqF3jTYKgcye/w5Ltia7PZJL8fSe1yX8Mo/FKCD5y42Wxmq9UqScndEmB/2wikReRNn8lVdGjU0JHj9Rxaxw2YUzf16e+jcJjzFZFiKgqVOc+CiZ7VamXT6TTUL0YbIR1s1vb1vTzKyCeTiT0/P3d680Vl11wZpPLbOc38PVU2fRKzqJomB/b6yuD6tP+sqWQ3k0uW4S88YF7csVqtbDKZhAdC3aF4g/VyA4/MOJIX4/HYPn36FE6kMl8RSufIQW08NUG/pwVLpHO8J5uYk55xJBRtXGY7VSWVqkvgQtjn52cbj8dJ5BlhJqar+d6mYdSaVeW+Fdjy27D9/pwoFOpD9VGGL7rWJaex6xOM5iYqp8LN5e9VQUjUExA3nUr2cGYUw1JefGYEo45hkcCljKpflDhCoW7v6z8YDOz5+dnevHmTyqO4x4ACWmoDclu5HE6IFiXCNUq4mdMf5OoK1bWuOYzAvRhVG1hOqfv/1XVt+/3eXl5ebDabpZOv7nlmJXbOIpWR7+U+/1wQya3NncN+eXmxh4cHq+s6AURWDLPPUyxd1FiSFwzVRMpMcx1AdIVaX/dwRZnnupcoSZjqHRxlD/HZTvFuNpvO4vdZS9WxhX+mvAeJRxODcWxRFDYajWw4HNp6vbaHh4d0zx76H54wXxyWROcqd1XpuUoCRQ2ZFXGkZNX3CDgjyTdrG6LOnbzo3PK2qirbbDa22Wzs8fGxo0Jm85+7H5FTyGkDRL6PW8FGBQ58Unx3bjYbO5/PNpvNkjqIawNY0x6d4qhrR7Qhojau0QbpSwblqn4iV6O6nEXEjkqQ+aZ+eXmxpmns8fGxk91TafHcGDEqkMkg7sHTp2Pnxccd5pLv3W5n5/PZFovFjQZfgSN1+yX7RwVMWcmjJkmZXmVdVDzdF3bmLABzIuqwqXa9g8HAVquVtW1r8/m8c/Lv6Q+g6juVdH2owj9uL9ZHKnCrWD/ps9ksXQzl5ozJEG51rkIgJELUBY2KZ8iVb0Wtb6IoQOUT+qxErjsp5wkwDewxvl9mvVgskqRbnXh+h2itIkay7CNbOGd9j1XAD59Op3Y8Hu35+dlms5nNZrMOYo40dgzwVA6BrQbr6iNFM+sDI+4i14uP9ZN9rWf58xURVJalrddra5rGZrNZquML1TwBfZ/bqNgsItUF9PEAaNpzzYgVZ+9hYlVVtt/vrWkaWywWhjeWRrdps2nnhApLtSMBqQJeEXmUGwsveqT46esn7OJV7HjWtq09PT3ZYDCw+Xze6besOpfcE+Jx5MWHqCiKWz2A6pLdRyxwLaAqw/YXOxwOtlwubTqd2mw2kyVOqmBD5erZp6F5QyyTYxoVgRLJp7CiKCKeGIfkxJ0+9u12mzR8k8kkdWtTauWoiimX9IqIrMvl8tkF5KRPLFmKwoyopy6bYb8O1q2BcwaqVQuesoho6Us65W4fizaYAlJ9esIICPL1tNjy7XA4pBK8+XzeEXDyHCh53D2ZyQivpeqhCLhwL/uIo88lYlRxhZNGdV3b4XCw9XptVVUlgiMifBSC5jHeZLqCzmbMeEY99nJJHQaz7KZUHsRPddM09vr6mrR7KAePxDmRVcoplCOLgPihZFKGOeiI5eoTSOQ2B1LIzhhuNhsrisKm02mnjJk7fkeiFS5Nd1PN16hFt33mJGTKKkUdRqIWMd6Ea7fb2eVySQvPsvFIxaT+LZd3ENKvGzY3WYC+Xvi5+3RyjOE9HILr2cbjsZ1OJ3t9fbXdbmfT6TS5C9fKqVtKWCTCpEeuVWzU01+BwL7iFnUZtYtlmqZJal1vKslhncp9qL7DvQKP4F4mNP2dBhG5erbcxN3LDCr0GsXW4/HYRqORnc9ne319tfV6bePxONHKHisr3MGXQTGZpe7tU5MaXegUsYUM8HxDe/Vzasv+q16Pr7/Dkxm1z4k4GLbWag1yjGGHCu7jAiJFLg+QO4iwv1b4gusFPGw8nU623+/tf//7n5VlabPZrAOUONpgppEznNgGv09MosSuSrGMFul4PHbuPB4Oh+m0R00ocxRuX0kZ1yoii6i6qysLkiWC+pJDSqacawKVa7nGhEsiKn7lCxwnOIj0AhVPQPmFF03TdBZQET54jWr0/qq6B822T/7pdLLD4dBxU2VZdnw8/pzqtJbLQEYUL46Hay9YNa2ypZ0NoNQsfRyzMj0KZavFjSwJ3+zpP1NVVZpUpFAxjPJNgTeg4Wd7Qkq5O743gMeHoahvxuPxmGRaZVmmghnVERSf7xs10laouxiiu5zQEqhEUt9NJWbWZQL7Up4KKEZ3/+QAS3TTJpeFMRPpk435hsvlkjbCer3u+NeyLFPTiaIoUl0DXlLBp7pt29RV43g82vF4TKebGUH06RGhxuKPXIUx8wf3MH2clbw3UeSf+X/9B04mXw6cfAAAAABJRU5ErkJggg==';

export default image;
