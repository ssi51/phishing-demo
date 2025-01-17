@echo off

for /l %%i in (1,1,5) do (
    echo You have been "hacked"! > hacked_file_%%i.txt
)

echo ==========================================
echo "WARNING: Your system has been hacked!"
echo ==========================================
echo Fake text files have been created in this directory.
echo This is a harmless demonstration.
pause
