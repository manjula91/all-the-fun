yarn
yarn kill
yarn build
PORT=7070 yarn start &
echo "Server has started ... Let it spin at full speed"
echo "\n****"
echo "Waiting for few seconds ..."
sleep 3s
echo "Requesting localhost and saving snapshot"
curl http://localhost:7070 -o public/index.html
echo "Done !!!\n"
yarn kill
exit
